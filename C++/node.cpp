#include <stdio.h>
#include <stdlib.h>
struct node{
    int info;
    struct node *link;
}*start;
void create(){
        struct node *ptr,*cpt;
        int ch;    
        ptr = (struct node*) malloc(sizeof(struct node));
        printf("Enter the data");
        scanf("%d",&ptr->info);
        start=ptr;
        printf("Enter your choice of next node");
        scanf("%d",&ch);
        while(ch==1){
            cpt=(struct node*) malloc(sizeof(struct node));
            printf("Enter data");
            scanf("%d",&cpt->info);
            ptr->link=cpt;
            ptr=cpt;
            printf("Enter choice for next node");
            scanf("%d",&ch);
        }
        ptr->link=NULL;
        
}

int main()
{
    create();

    return 0;
}