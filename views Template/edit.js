<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EDIT</title>
</head>
<body>
    <form method="post" action="http://localhost:9090/chat/update/<%=A.id%>?_method=PUT">
        <div>
            Id : <%= A.id %>
        </div>
        <div>
            From : <%= A.from %>
        </div>
        <div>
            to : <%= A.to %>
        </div>
        <div>
            Date : <%= A.date %>
        </div>
        <div>
            <textarea name="msg" cols="30" rows="4" placeholder="Edit your message"></textarea>
        </div>
        <button type="submit" style="display: block; padding: 15px 15px 15px 15px; border-radius: 10px;font-weight: bold; background-color: cornsilk;">Submit</button>
    </form>

    
</body>
</html>
