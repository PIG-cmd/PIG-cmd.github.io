
int LoadSystem(int);
int LoadSystem(int command_or_GUI)
{
		printf("Connect the server......\n\n\n");
	   system("del /q number.txt >nul");
	   system("del /q money.txt >nul");
	   system("wget.exe -b https://pig-cmd.github.io/sfqs66_version2.0/number.txt");
	   system("wget.exe -b https://pig-cmd.github.io/sfqs66_version2.0/money.txt");
	   system("ping 127.0.0.1 >> ping.log & iconv -c -f utf-8 -t gb2312 number.txt>number_ansi.txt");
	   system("cls");
	   /*system("del /q .wget-hsts >nul");
	   system("del /q wget-log >nul");
	   */
   if (command_or_GUI)
   {
	   system("call sfqs_cmd.exe");
	} else {
		system("call sfqs_gui.exe");
	};
	return 0;
};
