#include <windows.h>
#include <stdio.h>
#include <stdlib.h>
int main(void)
{
	while(1)
	{
		//Listen to the task.
		FILE * fp;
		fp = fopen("task","r");
		if (fp != NULL)
		{
			char * str = (char*)malloc(sizeof(char)*100);
			if (str == NULL)
			{
				system("echo Error:Connot request the space of the memory. >> download.err.log");
				
			} else {
				fgets(str,100,fp);
				system(str);
				FILE * fp2;
				fp2 = fopen("task","w");
				fclose(fp2);
			}
			free(str);
		}
		fclose(fp);
		Sleep(500);
	};
};
