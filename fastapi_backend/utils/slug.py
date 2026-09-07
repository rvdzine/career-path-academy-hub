import re
import unicodedata

def slugify(text: str) -> str:
    """
    Generate a clean URL slug from text, matching Django's slugify behavior.
    """
    text = unicodedata.normalize('NFKD', text).encode('ascii', 'ignore').decode('ascii')
    text = re.sub(r'[^\w\s-]', '', text).strip().lower()
    return re.sub(r'[-\s]+', '-', text)

def generate_unique_slug(model_class, db, title: str, current_id: int = None, max_len: int = 250) -> str:
    """
    Generates a unique slug for a model, handling collisions by appending -1, -2, etc.
    """
    base_slug = slugify(title)[:max_len]
    slug = base_slug
    counter = 1

    while True:
        query = db.query(model_class).filter(model_class.slug == slug)
        if current_id:
            query = query.filter(model_class.id != current_id)
        
        if not query.first():
            break
        
        slug = f"{base_slug[:max_len-10]}-{counter}"
        counter += 1

    return slug
