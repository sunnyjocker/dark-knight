const url = $request.url;
var body = $response.body;

bodyContent = '';

lines = body.split('\n')
for (l in lines) {  
  if (lines[l].trim().contains("<div class=\"previewBox\" style")) {
    bodyContent += "<div class=\"previewBox\" hidden>\n"
  } else if ("<section class=\"nav\">" == lines[l].trim()) {
    bodyContent += "<section class=\"nav\" hidden>\n"
  } else {
    bodyContent += (lines[l] + '\n')
  }
}

$done(bodyContent);