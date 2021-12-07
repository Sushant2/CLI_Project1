#include <bits/stdc++.h>
using namespace std;
#define in(x) \
    int x;    \
    cin >> x;
#define loop(i, a, b) for (int i = a; i < b; i++)
#define loopeq(i, a, b) for (int i = a; i <= b; i++)
void cpt()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
#ifndef ONLINE_JUDGE
    freopen("in.txt", "r", stdin);
    freopen("out.txt", "w", stdout);
#endif
}
class Solution
{
public:
    // int maxIceCream(vector<int> &costs, int coins)
    // {
    //     int n = sizeof(costs) / sizeof(int);
    //     int ans = 0;
    //     sort(begin(costs), end(costs));
    //     if (costs[0] > coins)
    //         ans = 0;
    //     else
    //     {
    //         int tsum = 0;
    //         for (int i = 0; i < n; i++)
    //             tsum += costs[i];
    //         if (tsum <= coins)
    //             ans = n;
    //         else
    //         {
    //             for (int i = n - 1; i >= 0; i--)
    //             {
    //                 tsum -= costs[i];
    //                 if (tsum == coins)
    //                     ans = n - (n - i);
    //             }
    //         }
    //     }
    //     return ans;
    // }
    vector<int> decompressRLElist(vector<int>& nums) {
        
    }
};
int main()
{
    cpt();
    in(t);
    while (t--)
    {
        vector<int> nums(4);
        loop(i, 0, 4) cin >> nums[i];
        vector<int> res(nums.size() + 1);
        for (int i = 0; i < nums.size(); i += 2)
        {
            while (nums[i] != n)
                res.push_back(nums[i + 1]);
        }
        for (int i = 0; i < res.size(); i++)
            cout << res[i] << " ";
    }
    return 0;
}