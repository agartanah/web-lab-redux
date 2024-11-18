function selector(state) {
    return {
        openTask: state.tasks.openTask,
        currTask: state.tasks.currTask, // { id: '', title: '', description: '' }
        currOperation: state.tasks.currOperation,
        listTasks: state.tasks.listTasks
    };
}

export default selector;