import os
import io
import uuid
from pathlib import Path
from datetime import date, datetime
from typing import Tuple, Optional
from PIL import Image, ImageDraw, ImageFont
import cloudinary
import cloudinary.uploader

from ..config import settings
from ..utils.file_storage import configure_cloudinary, MEDIA_ROOT

BASE_DIR = Path(__file__).resolve().parent.parent
TEMPLATE_PATH = BASE_DIR / "assets" / "templates" / "final_certificate.png"
FALLBACK_TEMPLATE_PATH = Path("c:/Users/surya/OneDrive/Desktop/cybershield/ids_new/public/assets/final_certificate.png")

def get_font(font_names: list, size: int) -> ImageFont.FreeTypeFont:
    """
    Finds and loads the first available TrueType font from a candidate list with system fallbacks.
    """
    # System font search locations
    font_dirs = [
        Path("C:/Windows/Fonts"),
        Path("/usr/share/fonts"),
        Path("/usr/share/fonts/truetype"),
        Path("/usr/local/share/fonts"),
        Path.home() / ".fonts",
        BASE_DIR / "assets" / "fonts",
    ]

    for name in font_names:
        for d in font_dirs:
            p = d / name
            if p.exists():
                try:
                    return ImageFont.truetype(str(p), size)
                except Exception:
                    continue
        # Also try direct name if Pillow can resolve it from OS registry
        try:
            return ImageFont.truetype(name, size)
        except Exception:
            continue

    # Ultimate fallback
    try:
        return ImageFont.load_default(size=size)
    except Exception:
        return ImageFont.load_default()

SVG_TEMPLATE_PATH = BASE_DIR / "assets" / "templates" / "certificate_template.svg"

def render_certificate_from_svg(
    student_name: str,
    course_name: str,
    duration: str = "3 Months",
    course_mode: str = "offline",
    certificate_id: str = "CERT-IDS00100",
    issue_date: Optional[date] = None,
) -> Image.Image:
    """
    Renders dynamic student details using the vector Certificate.svg template and resvg-py.
    Produces high-resolution 2368x1600 px image with crisp vector quality.
    """
    if not SVG_TEMPLATE_PATH.exists():
        raise FileNotFoundError(f"SVG template not found at {SVG_TEMPLATE_PATH}")

    import resvg_py

    # 1. Format Issue Date
    if isinstance(issue_date, (date, datetime)):
        formatted_date = issue_date.strftime("%B %d, %Y")
    else:
        formatted_date = datetime.now().strftime("%B %d, %Y")

    # 2. Format Mode
    mode_clean = course_mode.strip().lower()
    if "offline" in mode_clean:
        formatted_mode = "Offline"
    elif "online" in mode_clean:
        formatted_mode = "Online"
    elif "hybrid" in mode_clean:
        formatted_mode = "Hybrid"
    else:
        formatted_mode = course_mode.title()

    # 3. Format Duration
    formatted_duration = duration.strip() if duration else "3 Months"

    # 4. Dynamic Name Font Size
    clean_name = student_name.strip().title()
    if len(clean_name) <= 20:
        name_font_size = "44"
    elif len(clean_name) <= 28:
        name_font_size = "38"
    else:
        name_font_size = "32"

    # 5. Populate Template
    from xml.sax.saxutils import escape as xml_escape

    verify_url = getattr(settings, "SITE_URL", "https://idigitalstudies.com").rstrip("/") + "/verify-certificate"

    svg_template = SVG_TEMPLATE_PATH.read_text(encoding="utf-8")
    filled_svg = (
        svg_template
        .replace("{{STUDENT_NAME}}", xml_escape(clean_name))
        .replace("{{NAME_FONT_SIZE}}", name_font_size)
        .replace("{{COURSE_NAME}}", xml_escape(course_name.strip()))
        .replace("{{DURATION}}", xml_escape(formatted_duration))
        .replace("{{COURSE_MODE}}", xml_escape(formatted_mode))
        .replace("{{CERTIFICATE_ID}}", xml_escape(certificate_id.strip()))
        .replace("{{DATE_OF_ISSUE}}", xml_escape(formatted_date))
        .replace("{{VERIFY_URL}}", xml_escape(verify_url))
    )


    # 6. Candidate fonts for resvg
    candidate_fonts = [
        "C:/Windows/Fonts/segoeui.ttf",
        "C:/Windows/Fonts/segoeuib.ttf",
        "C:/Windows/Fonts/arial.ttf",
        "C:/Windows/Fonts/arialbd.ttf",
    ]
    font_files = [f for f in candidate_fonts if Path(f).exists()]

    png_bytes = resvg_py.svg_to_bytes(
        svg_string=filled_svg,
        skip_system_fonts=bool(font_files),
        font_files=font_files if font_files else None,
        zoom=2.0,
        text_rendering="geometric_precision",
        shape_rendering="geometric_precision",
        image_rendering="optimize_quality",
    )

    return Image.open(io.BytesIO(png_bytes)).convert("RGB")

def render_certificate(
    student_name: str,
    course_name: str,
    duration: str = "3 Months",
    course_mode: str = "offline",
    certificate_id: str = "CERT-IDS00100",
    issue_date: Optional[date] = None,
) -> Image.Image:
    """
    Renders dynamic student details directly onto the certificate template.
    Prioritizes SVG vector template if available; falls back to raster PNG.
    """
    if SVG_TEMPLATE_PATH.exists():
        try:
            return render_certificate_from_svg(
                student_name=student_name,
                course_name=course_name,
                duration=duration,
                course_mode=course_mode,
                certificate_id=certificate_id,
                issue_date=issue_date,
            )
        except Exception as e:
            print(f"[Certificate] SVG render warning: {e}. Falling back to raster template.")

    template_file = TEMPLATE_PATH if TEMPLATE_PATH.exists() else FALLBACK_TEMPLATE_PATH
    if not template_file.exists():
        raise FileNotFoundError(f"Certificate template not found at {TEMPLATE_PATH} or {FALLBACK_TEMPLATE_PATH}")

    img = Image.open(template_file).convert("RGB")
    draw = ImageDraw.Draw(img)

    # 1. Format Issue Date
    if isinstance(issue_date, (date, datetime)):
        formatted_date = issue_date.strftime("%B %d, %Y")
    else:
        formatted_date = datetime.now().strftime("%B %d, %Y")

    # 2. Format Mode
    mode_clean = course_mode.strip().lower()
    if "offline" in mode_clean:
        formatted_mode = "Offline Batch"
    elif "online" in mode_clean:
        formatted_mode = "Online Batch"
    elif "hybrid" in mode_clean:
        formatted_mode = "Hybrid Batch"
    else:
        formatted_mode = course_mode.title()

    # 3. Format Duration
    formatted_duration = duration.strip() if duration else "3 Months"

    # 4. Resolve Fonts with Fallbacks
    name_size = 48
    if len(student_name) > 26:
        name_size = 38
    elif len(student_name) > 20:
        name_size = 42

    font_name = get_font(["georgiab.ttf", "timesbd.ttf", "segoeuib.ttf", "arialbd.ttf"], name_size)
    font_course = get_font(["segoeuib.ttf", "arialbd.ttf", "calibrib.ttf"], 20)
    font_meta = get_font(["segoeuib.ttf", "arialbd.ttf", "calibrib.ttf"], 19)
    font_id = get_font(["segoeuib.ttf", "arialbd.ttf", "calibrib.ttf"], 17)

    # 5. Precision Text Overlays
    draw.text((282, 375), student_name.title(), fill="#EA2525", font=font_name)
    draw.text((628, 464), course_name.strip(), fill="#111827", font=font_course)
    draw.text((410, 566), formatted_duration, fill="#111827", font=font_meta)
    draw.text((828, 566), formatted_mode, fill="#111827", font=font_meta)
    draw.text((742, 852), certificate_id.strip(), fill="#111827", font=font_id)
    draw.text((742, 895), formatted_date, fill="#111827", font=font_id)

    return img

def generate_certificate_buffers(
    student_name: str,
    course_name: str,
    duration: str = "3 Months",
    course_mode: str = "offline",
    certificate_id: str = "CERT-IDS00100",
    issue_date: Optional[date] = None,
) -> Tuple[io.BytesIO, io.BytesIO]:
    """
    Renders the certificate and returns two BytesIO streams:
    1. PNG image buffer
    2. Print-ready PDF document buffer
    """
    img = render_certificate(
        student_name=student_name,
        course_name=course_name,
        duration=duration,
        course_mode=course_mode,
        certificate_id=certificate_id,
        issue_date=issue_date,
    )

    # PNG Buffer
    png_io = io.BytesIO()
    img.save(png_io, format="PNG", optimize=True)
    png_io.seek(0)

    # PDF Buffer (200 DPI for ultra-high print clarity)
    pdf_io = io.BytesIO()
    img.save(pdf_io, format="PDF", resolution=200.0)
    pdf_io.seek(0)

    return png_io, pdf_io

def upload_certificate_to_storage(png_buffer: io.BytesIO, certificate_id: str) -> str:
    """
    Uploads the certificate PNG to Cloudinary in folder 'ids/certificates'.
    Falls back to local disk storage if Cloudinary is not configured.
    Returns the public HTTPS URL.
    """
    clean_id = certificate_id.replace("/", "_").replace(" ", "_")

    if configure_cloudinary():
        try:
            target_folder = "ids/certificates"
            upload_result = cloudinary.uploader.upload(
                png_buffer.getvalue(),
                folder=target_folder,
                public_id=clean_id,
                resource_type="image",
                overwrite=True,
                unique_filename=False,
            )
            secure_url = upload_result.get("secure_url") or upload_result.get("url")
            print(f"[Cloudinary] Successfully uploaded certificate '{clean_id}': {secure_url}")
            return secure_url
        except Exception as e:
            print(f"[Cloudinary Error] Certificate upload failed: {e}. Falling back to local storage.")

    # Fallback to local media disk
    dest_dir = MEDIA_ROOT / "certificates"
    dest_dir.mkdir(parents=True, exist_ok=True)
    dest_path = dest_dir / f"{clean_id}.png"

    with open(dest_path, "wb") as f:
        f.write(png_buffer.getvalue())

    return f"/media/certificates/{clean_id}.png"
