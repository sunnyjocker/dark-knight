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
    bodyContent += "        // hacked by sunny\n"
    bodyContent += "    $('.send-btn').click()\n"
    bodyContent += "    $('#username').val(decodeURIComponent(atob('JUU4JThFJUFCJUU1JTg1JTg4JUU3JTk0JTlG')))\n"
    bodyContent += "    $('#usertel').val(decodeURIComponent(atob('MTg0MjYyNjQ2OTY=')))\n"
    bodyContent += "    $('#useraddress').val(decodeURIComponent(atob('JUU5JTg3JThEJUU1JUJBJTg2JUU1JUI4JTgyJUU1JThEJTk3JUU1JUIyJUI4JUU1JThDJUJBJUU1JUJDJUI5JUU1JUFEJTkwJUU3JTlGJUIzJUU4JTg1JUJFJUU5JUJFJTk5JUU1JUIyJUFEJUU3JUE3JTgw')))\n"
    bodyContent += "    $('.send-btn').click()\n"
  } else {
    bodyContent += (lines[l] + '\n')
  }
}

$done(bodyContent);