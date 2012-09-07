(function () {
    var addGoal = function (query, goalId) {
        domready(function () {
            var link = qwery(query);
            if (link.length == 1) {
                link[0].onclick = function () {
                    yaCounter13214158.reachGoal(goalId);
                };
            }
        });
    };

    addGoal('a[href=/task.pdf]', 'task.pdf');
    addGoal('a[href=mailto:info@rithis.com]', 'info@rithis.com');
})();
