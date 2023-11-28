package com.three.ngts.Service;

import com.three.ngts.Entity.BusSchedule;
import com.three.ngts.Entity.CustomEntity.ScheduleCard;
import com.three.ngts.Entity.CustomEntity.TwoDistrict;
import com.three.ngts.Entity.Route;
import com.three.ngts.Entity.RouteDistrict;
import com.three.ngts.Repo.BusScheduleRepo;
import com.three.ngts.Repo.RouteDistrictRepo;
import com.three.ngts.Repo.SeatRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class ScheduleCardService {

    @Autowired
    private RouteDistrictRepo routeDistrictRepo;

    @Autowired
    private BusScheduleRepo busScheduleRepo;

    @Autowired
    private SeatRepo seatRepo;

    @PostMapping("/scheduleCard")
    public List<ScheduleCard> getScheduleCard(@RequestBody TwoDistrict inputDistrict){
        List<RouteDistrict> sourceContainingRoutes = routeDistrictRepo.findAllByDistrict(inputDistrict.getSource());
        List<RouteDistrict> destinationContainingRoutes = routeDistrictRepo.findAllByDistrict(inputDistrict.getDestination());
        List<Route> routesContainingBoth = new ArrayList<Route>();
        Timestamp originalTimestamp = inputDistrict.getTimestamp();
        long originalTimeInMillis = originalTimestamp.getTime();
        long newTimeInMillis = originalTimeInMillis - 1;
        Timestamp newTimestamp = new Timestamp(newTimeInMillis);
        List<BusSchedule> allAvailableSchedule = busScheduleRepo.findBusSchedulesByDepartureTimeAfter(newTimestamp);
        List<BusSchedule> accurateSchedule = new ArrayList<BusSchedule>();

        for (RouteDistrict routeDistrict: sourceContainingRoutes){
            if (!routesContainingBoth.contains(routeDistrict.getRoute())){
                for (RouteDistrict routeDistrict1: destinationContainingRoutes){
                    if(routeDistrict.getRoute().equals(routeDistrict1.getRoute())){
                        routesContainingBoth.add(routeDistrict.getRoute());
                        break;
                    }
                }
            }
        }

        for(BusSchedule busSchedule: allAvailableSchedule){
            if (!accurateSchedule.contains(busSchedule)){
                for (Route route: routesContainingBoth){
                    if (route.equals(busSchedule.getRoute())){
                        accurateSchedule.add(busSchedule);
                        break;
                    }
                }
            }
        }
        List<ScheduleCard> scheduleCards = new ArrayList<ScheduleCard>();
        for (BusSchedule busSchedule: accurateSchedule){
            ScheduleCard scheduleCard = new ScheduleCard();
            scheduleCard.setBusSchedule(busSchedule);
            scheduleCard.setSeats(seatRepo.findAllByBusSchedule(busSchedule));
            scheduleCard.setRouteDistricts(routeDistrictRepo.findAllByRoute(busSchedule.getRoute()));
            scheduleCards.add(scheduleCard);
        }
        return scheduleCards;
    }


}
