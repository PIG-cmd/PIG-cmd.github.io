<% @language="vbscript" codepage="65001"%>
<%
t = request.form("type")
f = Server.Mappath("file/" & request.form("filename"))
set fs = Server.CreateObject("Scripting.FileSystemObject")
if t = "read" then
	if not fs.opentextfile(f,1,true).AtEndOfStream then
		response.write(fs.opentextfile(f,1,true).readall)
	end if
end if
if t = "write" then
	fs.opentextfile(f,2,true).write request.form("info")
end if
if t = "del" then
	fs.deletefile f
end if
if t = "fileexists" then
	if fs.fileexists(f) then
		response.write("true")
	else
		response.write("false")
	end if
end if
%>