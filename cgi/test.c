#include <time.h>
#include <stdlib.h>
#include <stdio.h>
int main(void){
    printf("Content-type: text/html\r\n\r\n");
    printf("Pragma: no-cache\n");
    printf("\n");
    printf("<DOCTYPE html>");
    printf("<html lang='ru'>");
    printf("<head>");
    printf("<title>Тест</title>");
    printf("<meta charset='utf-8'>");
    printf("</head>");
    printf("<body>");
    printf("Привет мир!");
    printf("</body>");
    printf("/html>");
}
