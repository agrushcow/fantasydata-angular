"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var players_service_1 = require('../players.service');
var OptimizedComponent = (function () {
    //  fantasyPoints;
    function OptimizedComponent(PlayersService, route, location) {
        this.PlayersService = PlayersService;
        this.route = route;
        this.location = location;
        this.players = [];
    }
    OptimizedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.PlayersService.getPlayer(name)
                .then(function (player) { return _this.player = player; });
            console.log(_this.player);
            // this.PlayersService.getPlayer(fantasyPoints)
            //   .then(fantasyPoints => this.fantasyPoints = fantasyPoints)
            //     console.log(this.fantasyPoints);
        });
        this.PlayersService.getPlayers()
            .then(function (players) { return _this.players = players; });
    };
    OptimizedComponent.prototype.goBack = function () {
        this.location.back();
    };
    OptimizedComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'optimized',
            templateUrl: 'optimized.component.html',
            styleUrls: ['optimized.component.css']
        }), 
        __metadata('design:paramtypes', [players_service_1.PlayersService, router_1.ActivatedRoute, common_1.Location])
    ], OptimizedComponent);
    return OptimizedComponent;
}());
exports.OptimizedComponent = OptimizedComponent;
//# sourceMappingURL=optimized.component.js.map