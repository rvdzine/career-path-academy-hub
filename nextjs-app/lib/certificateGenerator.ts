/**
 * Certificate Generator Utility
 * This utility generates a certificate image/PDF for placed students
 */

export interface CertificateData {
  studentName: string;
  studentId: string;
  certificateId: string;
  companyName: string;
  role: string;
  date?: string;
}

export const generateCertificateHTML = (data: CertificateData): string => {
  const currentDate = data.date || new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    @page {
      size: A4 landscape;
      margin: 0;
    }
    
    body {
      margin: 0;
      padding: 0;
      font-family: 'Georgia', serif;
    }
    
    .certificate {
      width: 297mm;
      height: 210mm;
      padding: 40px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      position: relative;
      box-sizing: border-box;
    }
    
    .certificate-inner {
      width: 100%;
      height: 100%;
      background: white;
      border: 20px solid #f7f7f7;
      box-shadow: 0 0 0 10px #667eea;
      padding: 60px;
      box-sizing: border-box;
      position: relative;
    }
    
    .certificate-header {
      text-align: center;
      margin-bottom: 40px;
    }
    
    .logo {
      font-size: 48px;
      font-weight: bold;
      color: #667eea;
      margin-bottom: 10px;
    }
    
    .certificate-title {
      font-size: 56px;
      font-weight: bold;
      color: #333;
      margin: 20px 0;
      text-transform: uppercase;
      letter-spacing: 4px;
    }
    
    .certificate-subtitle {
      font-size: 24px;
      color: #666;
      margin-bottom: 40px;
    }
    
    .certificate-body {
      text-align: center;
      margin: 40px 0;
    }
    
    .recipient-name {
      font-size: 48px;
      font-weight: bold;
      color: #667eea;
      margin: 30px 0;
      border-bottom: 3px solid #667eea;
      display: inline-block;
      padding-bottom: 10px;
    }
    
    .certificate-text {
      font-size: 22px;
      color: #555;
      line-height: 1.8;
      margin: 30px 0;
    }
    
    .highlight {
      color: #667eea;
      font-weight: bold;
    }
    
    .certificate-footer {
      display: flex;
      justify-content: space-between;
      margin-top: 60px;
      padding-top: 30px;
      border-top: 2px solid #eee;
    }
    
    .signature-block {
      text-align: center;
      flex: 1;
    }
    
    .signature-line {
      width: 200px;
      border-top: 2px solid #333;
      margin: 0 auto 10px;
    }
    
    .signature-name {
      font-size: 18px;
      font-weight: bold;
      color: #333;
    }
    
    .signature-title {
      font-size: 14px;
      color: #666;
    }
    
    .certificate-id {
      position: absolute;
      bottom: 20px;
      right: 40px;
      font-size: 14px;
      color: #999;
      font-family: 'Courier New', monospace;
    }
    
    .decorative-corner {
      position: absolute;
      width: 100px;
      height: 100px;
      border: 3px solid #667eea;
    }
    
    .corner-tl {
      top: 20px;
      left: 20px;
      border-right: none;
      border-bottom: none;
    }
    
    .corner-tr {
      top: 20px;
      right: 20px;
      border-left: none;
      border-bottom: none;
    }
    
    .corner-bl {
      bottom: 20px;
      left: 20px;
      border-right: none;
      border-top: none;
    }
    
    .corner-br {
      bottom: 20px;
      right: 20px;
      border-left: none;
      border-top: none;
    }
  </style>
</head>
<body>
  <div class="certificate">
    <div class="certificate-inner">
      <div class="decorative-corner corner-tl"></div>
      <div class="decorative-corner corner-tr"></div>
      <div class="decorative-corner corner-bl"></div>
      <div class="decorative-corner corner-br"></div>
      
      <div class="certificate-header">
        <div class="logo">iDigitalStudies</div>
        <div class="certificate-title">Certificate of Achievement</div>
        <div class="certificate-subtitle">This is to certify that</div>
      </div>
      
      <div class="certificate-body">
        <div class="recipient-name">${data.studentName}</div>
        
        <div class="certificate-text">
          has successfully completed the Digital Marketing program<br/>
          and has been placed at<br/>
          <span class="highlight">${data.companyName}</span><br/>
          as a<br/>
          <span class="highlight">${data.role}</span>
        </div>
        
        <div class="certificate-text" style="margin-top: 40px;">
          We congratulate ${data.studentName.split(' ')[0]} on this remarkable achievement<br/>
          and wish them continued success in their professional journey.
        </div>
      </div>
      
      <div class="certificate-footer">
        <div class="signature-block">
          <div class="signature-line"></div>
          <div class="signature-name">Director</div>
          <div class="signature-title">iDigitalStudies</div>
        </div>
        
        <div class="signature-block">
          <div style="margin-bottom: 20px;">
            <strong>Date:</strong> ${currentDate}
          </div>
          <div>
            <strong>Student ID:</strong> ${data.studentId}
          </div>
        </div>
        
        <div class="signature-block">
          <div class="signature-line"></div>
          <div class="signature-name">Head of Training</div>
          <div class="signature-title">iDigitalStudies</div>
        </div>
      </div>
      
      <div class="certificate-id">
        Certificate ID: ${data.certificateId}
      </div>
    </div>
  </div>
</body>
</html>
  `;
};

export const downloadCertificateAsHTML = (data: CertificateData) => {
  const html = generateCertificateHTML(data);
  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `certificate_${data.certificateId}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export const openCertificateInNewTab = (data: CertificateData) => {
  const html = generateCertificateHTML(data);
  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  window.open(url, '_blank');
  
  // Clean up after a delay
  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 1000);
};
