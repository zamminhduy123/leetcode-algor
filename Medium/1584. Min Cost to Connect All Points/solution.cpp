class Solution {
public:
    typedef pair<int,pair<int, int>> tri;
    
    int mahnhattan (vector<int> p1, vector<int> p2){
        return abs(p1[0] - p2[0]) + abs(p1[1] - p2[1]);
    }
    
    
    vector<vector<int>> makeAdjMatrix(vector<vector<int>> points){
        vector<vector<int>> res(points.size(), vector<int>(points.size(),0));
        for (int i = 0 ; i < points.size(); i++){
            for (int j = i+1; j < points.size(); j++){
                int temp = mahnhattan(points[i],points[j]);
                res[i][j] = temp;
                res[j][i] = temp;
            }
        }
        return res;
    }

    int minCostConnectPoints(vector<vector<int>>& points) {
        vector<bool> visited(points.size(), false);
        
        vector<vector<int>> matrix = makeAdjMatrix(points);
        
        priority_queue<tri, vector<tri>, greater<tri> > pq;
        
        visited[0] = true;
        
        int edgeInTree = 0, sum = 0;
        
        int startVertex = 0;
        
        while (edgeInTree < points.size()-1){
            int min = INT_MAX, y = 0;
            
            for (int j = 0 ; j < points.size();j++){
                if (!visited[j] && matrix[startVertex][j]){
                    pq.push({matrix[startVertex][j], {startVertex,j}});
                }
            }
            
            tri top = pq.top();
            while (!pq.empty() && visited[top.second.second]){
                pq.pop();
                top = pq.top();
            }

            startVertex = top.second.second;
            visited[startVertex] = true;
            sum+=top.first;
            edgeInTree++;
            pq.pop();
        }
        return sum;
    }
};