const url = $request.url;
var body = $response.body;

bodyContent = '// hacked by sunny\n';

lines = body.split('\n')
for (l in lines) {  
  if ("if(handle_type1 != 'recent'){" == lines[l].trim()) {
    bodyContent += (lines[l] + '\n')
    bodyContent += "        // hacked by sunny\n"
    bodyContent += "        $(\".agreement-icon\").addClass('on')\n"
  } else if ("showModal(\"modalnotic\")" == lines[l].trim()) {
    bodyContent += "        // hacked by sunny\n"
    bodyContent += "    doHandle(goodscode, goodsname,handle_type,is_shiwu,price)\n"    
  } else if ("$('#orderPopup').show()" == lines[l].trim()) {
    bodyContent += (lines[l] + '\n')
    bodyContent += "    $('.send-btn').click()\n"
  } else {
    bodyContent += (lines[l] + '\n')
  }
}

$done(bodyContent);