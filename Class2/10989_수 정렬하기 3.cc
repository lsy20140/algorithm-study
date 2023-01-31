#include <iostream>
#include <string>
using namespace std;

int main()
{
	int N;
	scanf("%d", &N);
	int arr_cnt[10001]={0,};

	for (int i = 0; i < N; i++) {
		int a;
		scanf("%d", &a);
		arr_cnt[a] +=1;
	}

	for (int i = 1; i < 10001; i++){
	    for(int j=0; j<arr_cnt[i]; j++){
	        printf("%d \n", i);
	    }
	}
		
	return 0;
}   