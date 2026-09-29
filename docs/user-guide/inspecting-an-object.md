---
title: Inspecting an object
sidebar_position: 6
---

# Inspecting an object

Every object Kaleidoscope shows you, such as a structure on the map or a place named in an answer, is a record in the knowledge graph. The inspector shows everything recorded about it.

## Opening an object

Open an object in any of these ways:

* **From the map:** click the object to open its popup, then click **Inspect**.
* **From the results table:** click the object's row.
* **From an answer:** click the object's name in the chat.

## What the inspector shows

The inspector lists the object's attributes on the left. On the right, the map zooms to the object and highlights it in yellow.

![The inspector for a structure. Its attributes are listed on the left, including code, exists, invalid, label, type, uid and uri, and the structure is highlighted in yellow on the map on the right.](/img/screenshots/inspector.png)

Every object has these attributes:

| Attribute | What it is |
| --------- | ---------- |
| label | The object's name. Several objects can have the same label. |
| code | The identifier of the object's record. Use it to refer to exactly this object, for example when Kaleidoscope asks which one you meant. |
| type | The kind of object, such as Structure. |
| uri | The object's full identifier in the knowledge graph. |
| uid | An internal identifier assigned by Geoprism Registry. |
| exists, invalid | Whether the object exists, and whether it has been marked as invalid, as recorded in Geoprism Registry. See [Viewing a Geo-Object](https://docs.geoprismregistry.com/version/v2.0.0/explore/explorer/viewing-a-geo-object) in the Geoprism Registry documentation. |

The other attributes depend on the type of object. For example, a structure has its value and population figures. Attribute names are shown as they're stored in the data, so some are abbreviations.

## Other options

* Click the graph icon at the top of the map, just to the right of the attributes (**Open Graph Visualizer**), to see how the object is connected to other objects. See [Exploring connections](exploring-connections.md).
* Click the double arrow (**Close Attributes**) to hide the attributes and see more of the map.
* To leave the inspector, click the back button at the top left. It says where it goes: **Back to chat response map** returns to the map of results, **Back to chat** returns to the conversation, and **Back to results** returns to the list you chose the object from.
