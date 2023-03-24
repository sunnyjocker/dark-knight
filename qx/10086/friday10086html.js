const url = $request.url;
var body = $response.body;

bodyContent = '';

lines = body.split('\n')
for (l in lines) {  
  if ("<div class=\"previewBox-bd\">" == lines[l].trim()) {
    bodyContent += "<div class=\"previewBox-bd\" hidden>"
  } else if ("<section class=\"nav\">" == lines[l].trim()) {
    bodyContent += "<section class=\"nav\" hidden>"
  } else {
    bodyContent += (lines[l] + '\n')
  }
}

$done(bodyContent);