// Task 14 - Find All Paths in a Graph

function allPathsSourceTarget(graph) {
    const routes = [];
    dfs(0, [], routes, graph);
    return routes
};

function dfs(i, visited, routes, graph) {

    if (visited.includes(i)) {
        return;
    }

    visited.push(i);

    if (i === graph.length - 1) {
        routes.push([...visited]);
    }

    for (neighbor of graph[i]) {
        dfs(neighbor, visited, routes, graph);
    }

    visited.pop();
}