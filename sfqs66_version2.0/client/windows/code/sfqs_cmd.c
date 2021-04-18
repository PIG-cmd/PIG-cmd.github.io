#include "cJSON.c"
#include "config.h"
#include "cJSON.h"
char * GetName(char*);
int main(void)
{
	printf("\n版权所有 (c) 班费查询系统 2021\n数据库维护以及提供资料 徐亦辰 xyc_35@163.com\n");
	printf("代码架构以及维护 李沪纲 fat-pig-2020@outlook.com\n");
	printf("开发语言 C(C99) \n服务器 GitHub \n");
	printf("访问我们的系统在互联网上：https://pig-cmd.github.io/sfqs66_version2.0/zh\n");
	system("title 班费查询系统 SFQS V2.0");
	while(1)
	{
		printf("\n\n请输入您的学号 输入非数字退出\nInput:");
		int num;
		if (!scanf("%d",&num))
		{
			/*printf("\nExit? (T/F) Default:T\n");
			char ch,c;
			while ((c = getchar()) != 10)
			{
				continue;
			};
			scanf("%c",&ch);
			if (ch != (int)"f" && ch != (int)"F")
			{
				break;
			};
			printf("\n\n\n");
			
		*/break;	
		} else {
			if (num < 1 || num > 35)
			{
				printf("输入不合法！\n");
				continue;
			}
			char * ch;
			itoa(num,ch,10);
			char * json_str = (char *)malloc(sizeof(char)*2000);
			if (json_str == NULL)
			{
				printf("Error: Out of memory\n");
				continue;
			}
			json_str = ReadFile("money.txt",1,2000);
			if (atoi(json_str) == 400 || atoi(json_str) == 401 || atoi(json_str) == 402)
			{
				system("echo msgbox \"Error:Cannot read the data.\",0,\"SFQS\"  > tmp.vbs & start tmp.vbs");
				return 0;
			};
			cJSON * cjson_money = NULL;
			cjson_money = cJSON_Parse(json_str);
			if (cjson_money == NULL)
			{
				printf("Parse the data fail.\n");
				continue;
			}
			cJSON * personal_object = NULL;
			personal_object = cJSON_GetObjectItem(cjson_money,ch);
			cJSON * personal_dot = NULL;
			cJSON * personal_star = NULL;
			cJSON * personal_donate = NULL;
			cJSON * db_dot_star_update_time = NULL;
			cJSON * db_donate_update_time = NULL;
			personal_dot = cJSON_GetObjectItem(personal_object,"dot");
			personal_star = cJSON_GetObjectItem(personal_object,"star");
			personal_donate = cJSON_GetObjectItem(personal_object,"donate");
			db_dot_star_update_time = cJSON_GetObjectItem(cjson_money,"star_dot_update_time");
			db_donate_update_time = cJSON_GetObjectItem(cjson_money,"donate_update_time");
			if (personal_dot == NULL || personal_star == NULL || personal_donate == NULL || db_dot_star_update_time == NULL || db_donate_update_time == NULL)
			{
				printf("Parse the data fail.\n");
				continue;
			}
			printf("%s 您好！\n您已累计为班级贡献 %.2f 元人民币\n账户里有 %d 颗星 %d 个点\n星和点的数据更新时间： %s \n已缴纳班费数据更新时间 %s\n\n\n(c) 2021 SFQS 保留所有权利 ",GetName(ch),personal_donate->valuedouble,personal_star->valueint,personal_dot->valueint,db_dot_star_update_time->valuestring,db_donate_update_time->valuestring);
			cJSON_Delete(cjson_money);
			continue;
		};
	};
};
char * GetName(char * num)
{
	char * json_str = (char *)malloc(sizeof(char)*1000);
	if (json_str == NULL)
	{
		printf("Error: Out of memory\n");
		return "400Error:Cannot request the space of the memory.";
	};
	json_str = ReadFile("number_ansi.txt",1,1000);
	if (atoi(json_str) == 400 || atoi(json_str) == 401 || atoi(json_str) == 402)
	{
		system("echo msgbox \"Error:Cannot read the data.\",0,\"SFQS\"  > tmp.vbs & start tmp.vbs");
		return 0;
	};
	cJSON * cjson_number = NULL;
	cjson_number = cJSON_Parse(json_str);
	if (cjson_number == NULL)
	{
		return "401Error:Parse the file failed.";
	};
	cJSON * name_struct = cJSON_GetObjectItem(cjson_number,num);
	return name_struct->valuestring;
};
