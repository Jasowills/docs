# RouteCTRL for Dynamics 365 SCM – v4.4.3.2025021312  
**Release Date:** February 13, 2025

## New Features & Improvements

### Returns Management Enhancements
- Enhanced validation for unexpected return submissions.
- Allows users to review and confirm unplanned returns before submission.

### Package Management Adjustments
- More flexible modifications to package items within a route.

### Route Archiving Enhancements
- **Performance Optimization:** Archiving moved to separate route tables for faster processing.
- **Batch Job Support:** New job includes configurable threshold for unmodified days.

### Map & Route Planning Improvements
- **Planned vs. Actual Map:** Better visualization for analyzing route deviations.
- **Rest Stop Separation:** Apply rest stops at start, end, or midpoint for better control.
- **Enhanced Map Interactivity:**
  - Improved handling of multiple map points in one location.
  - Clicking a cluster opens a selection dialog.
  - Second click shows a detailed dialog for that point.

### Security & Access Control Updates
- Updated security roles and privileges for better compliance.
- Improved backend API and service integration security.

### Performance & UX Improvements
- **Route Confirmation:** Image retrieval now fetches smaller images for better speed.
- **POD Fixes:** Removed incorrect Proof of Delivery download button.
- **Labeling Enhancements:** More consistent labels across modules.

### Driver App & Configuration Updates
- **New Driver App Navigation Controls:** Admins can configure navigation behavior.
- **Environment Configurations:** New type added for test and staging environments.

### Cost & Data Analysis Improvements
- More accurate variance calculation in cost reports.
- Fixed package item quantity display on route legs.

### Route & Shipment Processing Enhancements
- **Route Checklists:** Enforces required and recommended settings during validation.
- **Driver/Vehicle Group Settings:** Group-level settings override individual ones.
- **Find Shipments Form:** Improved search and filters for shipment visibility.
- **Backend Processing:** Various optimizations for better accuracy and speed.

---

## Known Issues

### Route Planner & Map Issues
- **Rest Stops Disappear:** May vanish when manually updating estimated subplans.
- **Auto-Build Subplan:** Sometimes builds outside of the defined route plan.

### Workspace Loading Issues
- **Transport, Sales, and Environment Workspaces:** Experiencing data loading glitches.
- These workspaces are temporarily hidden while fixes are implemented.