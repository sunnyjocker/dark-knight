const url = $request.url;
var body = $response.body;

bodyContent = '// hacked by sunny\n';

lines = body.split('\n')
for (l in lines) {  
  bodyContent += (lines[l] + '\n')
  if ("if(handle_type1 != 'recent'){" == lines[l].trim()) {
    bodyContent += "        // hacked by sunny\n"
    bodyContent += "        $(\".agreement-icon\").addClass('on')\n"
  }
}

$done(bodyContent);