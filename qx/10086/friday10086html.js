const url = $request.url;
var body = $response.body;

bodyContent = '';

lines = body.split('\n')
for (l in lines) {  
  if ("<div class=\"previewBox\">" == lines[l].trim()) {
    bodyContent += "<div class=\"previewBox\" hidden>\n"
  } else if ("<section class=\"nav\">" == lines[l].trim()) {
    bodyContent += "<section class=\"nav\" hidden>\n"
  } else {
    bodyContent += (lines[l] + '\n')
  }
}

$done(bodyContent);