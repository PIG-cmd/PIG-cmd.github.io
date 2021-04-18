#include "config.h"
#include "system.h"
#include <string.h>
int main(void)
{
	char * gui_config = (char *)malloc(sizeof(char)*20);
	if (gui_config == NULL)
	{
		system("echo msgbox \"Error:Cannot request the space of the memory.\",0,\"SFQS\"  > tmp.vbs & start tmp.vbs");
		return 0;
	} else {
		gui_config = ReadConfigFile("config",1);
		if (atoi(gui_config) == 400 || atoi(gui_config) == 401)
		{
			system("echo msgbox \"Error:Cannot read the config.\",0,\"SFQS\"  > tmp.vbs & start tmp.vbs");
			return 0;
		}
		else {
				if (!atoi(gui_config))
				{
					LoadSystem(1);
				} else {
					LoadSystem(0);
				} 
			
		};
	};
	return -1;
}
 
