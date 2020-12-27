var loginstatus = 
<% @language="vbscript" codepage="65001"%>
<%
'chr(34)
'Steup
set fs = server.createobject("scripting.filesystemobject")
'Get Type
t = request("type")
if t = "login" then
	u = request("username")
	p = request("password")
	f = server.mappath("userdata/" & u & "_ps.tcp.udp")
	if fs.fileexists(f) then
		cp = fs.opentextfile(f,1,false).readall
		if cp = p then
			response.write("{" & chr(34) & "status" & chr(34) & ":" & chr(34) & "The login was successful" & chr(34) & "," & chr(34) & "username" & chr(34) & ":" & chr(34) & u & chr(34) & "}")
			response.cookies("pigwebsiteusername") = u
		else
			response.write("{" & chr(34) & "status" & chr(34) & ":" & chr(34) & "Error:The password is wrong" & chr(34) & "}") 
		end if
	else
		response.write("{" & chr(34) & "status" & chr(34) & ":" & chr(34) & "Error:There is no such record in the database:DataBase(passworddata)." & u & ".password" & chr(34) & "}") 
	end if
else
	if t = "reg" then
		u = request("username")
		p = request("password")
		f = server.mappath("userdata/" & u & "_ps.tcp.udp")
		if fs.fileexists(f) then
			response.write("{" & chr(34) & "status" & chr(34) & ":" & chr(34) & "Error:The user name repeats" & chr(34) & "}") 
		else
			fs.opentextfile(f,2,true).write p
			response.write("{" & chr(34) & "status" & chr(34) & ":" & chr(34) & "The registration was successful" & chr(34) & "," & chr(34) & "username" & chr(34) & ":" & chr(34) & u & chr(34) & "}")
			response.cookies("pigwebsiteusername") = u
		end if
	else
		if t = "exit" then
			response.cookies("pigwebsiteusername").expires = now - 1
			response.write("{" & chr(34) & "status" & chr(34) & ":" & chr(34) & "OK" & chr(34) & "}")
		else
			response.write("{" & chr(34) & "status" & chr(34) & ":" & chr(34) & "Error type:" & t & chr(34) & "}") 
		end if
	end if
end if
%>
