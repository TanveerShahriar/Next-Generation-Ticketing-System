import Route from "./Route";
import district from "./District";

class RouteDistrict{
    routeDistrictId: number;
    route: Route;
    district: district;
    distOrder: number;

    constructor(routeDistrictId: number, route: Route, district: district, distOrder: number) {
        this.routeDistrictId = routeDistrictId;
        this.route = route;
        this.district = district;
        this.distOrder = distOrder;
    }
}

export default RouteDistrict;