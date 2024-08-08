function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);
    
    const inputTextArea = document.querySelector('#inputs textarea');
    const bestRestaurantElement = document.querySelector('#outputs #bestRestaurant p');
    const workersElement = document.querySelector('#outputs #workers p');
    
    function onClick () {
        const restaurants = JSON.parse(inputTextArea.value).reduce((acc, data) => {
            const [restaurantName, workersData] = data.split(' - ');
            
            const workers = workersData.split(', ').map((workerData) => {
                const [name, salary] = workerData.split(' ');
                return {
                    name, 
                    salary: Number(salary),
                }
            });
            
            if (!acc.hasOwnProperty(restaurantName)) {
                acc[restaurantName] = {
                    workers: []
                }
            }
            
            acc[restaurantName].workers.push(...workers);
            
            return acc;
        }, {});
        
        function getAvgSalary(restaurantData) {
            return restaurantData.workers.reduce((acc, curr) => acc + curr.salary, 0) / restaurantData.workers.length;
        };
        
        const [bestRestaurantKey] = Object.keys(restaurants).sort(
            (a, b) => getAvgSalary(restaurants[b]) - getAvgSalary(restaurants[a])
            );
        
        const bestWorkers = restaurants[bestRestaurantKey].workers.slice().sort(
            (a, b) => b.salary - a.salary
            );
        
        bestRestaurantElement.textContent = 
        `Name: ${bestRestaurantKey} Average Salary: ${getAvgSalary(restaurants[bestRestaurantKey]).toFixed(2)} Best Salary: ${bestWorkers[0].salary.toFixed(2)}`;
        
        workersElement.textContent = 
        bestWorkers.map((x) => `Name: ${x.name} With Salary: ${x.salary}`).join(' ');
    }
}
