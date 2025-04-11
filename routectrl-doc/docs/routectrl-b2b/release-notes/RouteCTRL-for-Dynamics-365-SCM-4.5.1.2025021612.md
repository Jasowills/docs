
# RouteCTRL for Dynamics 365 SCM – v4.5.1.2025021612  
**Release Date:** February 16, 2025

## New Features & Enhancements

### Fuel Efficiency Tracking for Vehicles & Groups
- Added fuel efficiency fields to transport vehicles and vehicle groups.
- Enables better tracking and reporting of fuel consumption.

### Fuel Cost Configuration for Vehicles & Groups
- Introduced Fuel Cost Type in cost and cost range setup for vehicles and groups.
- Allows organizations to define cost structures based on fuel usage.

### UI & Security Improvements
- Minor UI adjustments for a more streamlined user experience.
- Security fixes to enhance system integrity and protect against unauthorized access.

### Rest Stop Management Updates
- **Fixed Position Rest Stop Generation Removed:**  
  The automatic generation of rest stops in fixed positions has been removed due to API dependency changes.
- Rest stops can now be manually reordered to a fixed position after estimation using the subplan route map planner.

---

## Known Issues

### Route Planner Issues
- **Auto Build Subplan Issue:**  
  The auto-build functionality in the route planner may create subplans outside of the specified route plan.

### Workspace Loading Issues
- **Transport, Sales, and Environment Workspaces:**  
  These workspaces are experiencing data loading inconsistencies and glitches upon opening.  
  As a precaution, they have been temporarily hidden until a fix is implemented.