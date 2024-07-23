function solve(progress) {
    const renderBar = (progress) => `[${'%'.repeat(progress / 10)}${'.'.repeat(10 - (progress / 10))}]`;
    const renderProgress = (progress) => `${progress}% ${renderBar(progress)}`;

    const isCompleted = progress === 100;

    console.log(renderProgress(progress));
    console.log(isCompleted ? '100% Complete!' : 'Still loading...');
}



solve(30);      // 30% [%%%.......]
                // Still loading...

solve(50);      // 50% [%%%%%.....]
                // Still loading...

solve(100);     // 100% Complete!
                // [%%%%%%%%%%]

	

	

	
