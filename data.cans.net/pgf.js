function pgf_to_html(str)
{
	str = atob(str);
	str = decodeURI(str);
	str = unescape(str);
	str = unescape(str);
	str = unescape(str);
	str = str.replace(/__pgf__turn_left__pgf__/gm,"<");
	str = str.replace(/__pgf__turn_right__pgf__/gm,">");
	str = str.replace(/__pgf__space__pgf/gm," ");
	str = str.replace(/__pgf__on__pgf/gm,"\"");
	return str;
}
function html_to_pgf(str)
{
	str = str.replace(/</g,"__pgf__turn_left__pgf__");
	str = str.replace(/>/g,"__pgf__turn_right__pgf__");
	str = str.replace(/\s/g,"__pgf__space__pgf");
	str = str.replace(/"/g,"__pgf__on__pgf");
	str = escape(str);
	str = escape(str);
	str = escape(str);
	str = encodeURI(str);
	str = btoa(str);
	return str;
}
