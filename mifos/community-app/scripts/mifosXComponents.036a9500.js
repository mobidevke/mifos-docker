define(['Q', 'underscore', 'mifosX'], function (Q) {
    var components = {
        models: [
            'models.3b253bb8'
        ],
        services: [
            'ResourceFactoryProvider',
            'HttpServiceProvider',
            'AuthenticationService',
            'SessionManager',
            'Paginator',
            'UIConfigService',
            'NotificationResponseHeaderProvider'
        ],
        controllers: [
            'controllers.39a37334'
        ],
        filters: [
            'filters.61c17440'
        ],
        directives: [
            'directives.0d9695e0'
        ]
    };

    return function() {
        var defer = Q.defer();
        require(_.reduce(_.keys(components), function (list, group) {
            return list.concat(_.map(components[group], function (name) {
                return group + "/" + name;
            }));
        }, [
            'routes-initialTasks-webstorage-configuration.d2afc681'
        ]), function(){
            defer.resolve();
        });
        return defer.promise;
    }
});
