---
title: Exploring connections
sidebar_position: 7
---

# Exploring connections

The graph visualizer shows how an object is connected to other objects in the knowledge graph. Use it to see why an object was included in an answer, or to find related objects to ask about.

## Opening the graph visualizer

1. Open the object in the inspector. See [Inspecting an object](inspecting-an-object.md).
2. Click the graph icon at the top of the map, just to the right of the attributes (**Open Graph Visualizer**). The graph opens over the map.

To go back to the map, click the graph icon again (**Close Graph Visualizer**).

## Reading the graph

![The graph visualizer for a structure. The structure is in the middle, with LocatedIn relationships to the Upper Guadalupe River project area and to land parcel 45816001. A legend at the bottom left lists LandParcel, ProjectArea and Structure, each with a checkbox.](/img/screenshots/graph-explorer.png)

* The object you're inspecting is in the middle. Each object it's connected to is shown as a hexagon, with its label.
* Each line is a relationship, labelled with its name. The arrow shows its direction. In the example, the structure is located in the Upper Guadalupe River project area, and in land parcel 45816001.
* The graph shows direct connections only: the objects one step away, up to 100 of them.
* The legend at the bottom left lists the types of object in the graph. Clear a type's checkbox to hide objects of that type.

Relationship names are shown as they're stored in the data. The current data has these relationships:

| Relationship | What it means |
| ------------ | ------------- |
| LocatedIn | An object is located in another, such as a structure in a project area or a land parcel. |
| FlowsInto | One waterway flows into another. |
| HasFloodRisk | Links a flood scenario and the objects at risk of flooding in it. |
| HasMitigation | Links an object and the mitigation measures that address it. |

The relationships available depend on the data in the current [data release](../data/data-releases.md).

## Following a connection

Click an object in the graph to inspect it. The attributes change to show that object, and the graph re-centres on it and its connections. This way, you can follow connections one step at a time.
