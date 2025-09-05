#include<stdio.h>


void SelectionSort(int *a, int n){
    int temp;
    for (int i = 0; i < n; i++){
        for (int z = i + 1; z < n; z++){
            if(a[z] <= a[i]){
                temp = a[i];
                a[i] = a[z];
                a[z] = temp;
            }
        }
    }
    for (int i = n -1; i >= 0; i--)
    {
        for (int z = i - 1; z >= 0; z--)
        {
            if (a[z] >= a[i])
            {
                temp = a[i];
                a[i] = a[z];
                a[z] = temp;
            }
        }
    }
    for (int i = 0; i < n ; i++){
        printf("%d",a[i]);
    }
}

void main(){
    int arr[] = {2, 1, 3, 6,5};
    SelectionSort(arr, 5);
}