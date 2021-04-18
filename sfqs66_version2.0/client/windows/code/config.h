#include <stdio.h>
#include <stdlib.h>
char * ReadFile(char *,int,int);
char * ReadConfigFile(char *,int);
int command_line(char *);
char * ReadConfigFile(char * filename,int line)
{
	FILE * fp;
	fp = fopen(filename,"r");
	if (fp == NULL)
	{
		return "400error:Connot open the file";
	}
	int i = 1;
	char * str = (char *)malloc(sizeof(char)*50);
	while (fgets(str,40,fp) != NULL)
	{
		if (i == line)
			return str;
		i++;
	};
	return "401error:Connot find the config.";
	
};
int command_line(char * str)
{
	FILE * fp;
	fp = fopen("task","w");
	if (fp == NULL)
		return 0;
	fputs(str,fp);
	fclose(fp);
	return 1;
}
char * ReadFile(char * filename,int line,int max_size)
{
	FILE * fp;
	fp = fopen(filename,"r");
	if (fp == NULL)
	{
		fclose(fp);
		return "400error:Connot open the file";
	}
	int i = 1;
	char * str = (char *)malloc(sizeof(char)*max_size);
	if (str == NULL)
		return "402error:Connot request the space of the memory.";
	while (fgets(str,max_size-5,fp) != NULL)
	{
		if (i == line)
		{
			fclose(fp);
			return str;
		}
		i++;
	};
	fclose(fp);
	return "401error:Connot find the config.";
	
};
