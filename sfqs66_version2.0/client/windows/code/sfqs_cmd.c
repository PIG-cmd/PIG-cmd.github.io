#include "cJSON.c"
#include "config.h"
#include "cJSON.h"
char * GetName(char*);
int main(void)
{
	printf("\n��Ȩ���� (c) ��Ѳ�ѯϵͳ 2021\n���ݿ�ά���Լ��ṩ���� ���೽ xyc_35@163.com\n");
	printf("����ܹ��Լ�ά�� ��� fat-pig-2020@outlook.com\n");
	printf("�������� C(C99) \n������ GitHub \n");
	printf("�������ǵ�ϵͳ�ڻ������ϣ�https://pig-cmd.github.io/sfqs66_version2.0/zh\n");
	system("title ��Ѳ�ѯϵͳ SFQS V2.0");
	while(1)
	{
		printf("\n\n����������ѧ�� ����������˳�\nInput:");
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
				printf("���벻�Ϸ���\n");
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
			printf("%s ���ã�\n�����ۼ�Ϊ�༶���� %.2f Ԫ�����\n�˻����� %d ���� %d ����\n�Ǻ͵�����ݸ���ʱ�䣺 %s \n�ѽ��ɰ�����ݸ���ʱ�� %s\n\n\n(c) 2021 SFQS ��������Ȩ�� ",GetName(ch),personal_donate->valuedouble,personal_star->valueint,personal_dot->valueint,db_dot_star_update_time->valuestring,db_donate_update_time->valuestring);
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
