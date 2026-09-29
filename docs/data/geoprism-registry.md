---
title: How Geoprism Registry prepares the data
sidebar_position: 2
---

# How Geoprism Registry prepares the data

[Geoprism Registry](https://docs.geoprismregistry.com/version/v2.0.0/introduction) (GPR) is a translation layer that brings data from authoritative sources into AI. It takes flat data from those sources, such as [spreadsheets and shapefiles](https://docs.geoprismregistry.com/version/v2.0.0/curate/import-geospatial-data), and turns it into a knowledge graph that Kaleidoscope can query.

:::info
Geoprism Registry isn't the authoritative source of the data. The organizations that publish each dataset are. Geoprism Registry stores the data in its knowledge graph, and it's the source of Kaleidoscope's data.
:::

## What Geoprism Registry adds

When Geoprism Registry turns flat data into a knowledge graph, it adds:

* **Relationships.** Records are linked to each other, such as a structure to the project area it's located in, so questions can follow the connections. See [Hierarchies](https://docs.geoprismregistry.com/version/v2.0.0/configure/geo-objects-and-hierarchies/hierarchies) and [Import Edge Data](https://docs.geoprismregistry.com/version/v2.0.0/curate/import-edge-data).
* **Common identifiers.** Each record has a code that doesn't change, so the same place is always identified the same way. See [Unique identifier](https://docs.geoprismregistry.com/version/v2.0.0/geoprism-registry-key-components/content-related-capacities-of-geoprism-registry/5.2-content-related-capacities-of-geoprism-registry-1) in the Geoprism Registry documentation.
* **Change over time.** Geoprism Registry records when each value was valid, so the data can be read as it was on a given date. See [Changes over time](https://docs.geoprismregistry.com/version/v2.0.0/geoprism-registry-key-components/content-related-capacities-of-geoprism-registry/change-over-time).
* **Controlled vocabularies.** Records are classified with agreed terms instead of free text, so the same kind of thing is always recorded the same way. See [Concepts](https://docs.geoprismregistry.com/version/v2.0.0/configure/concepts).
* **Provenance.** Each import records the source the data came from and the organization responsible for it, so values can be traced back to their authoritative source. See [Source Authorities](https://docs.geoprismregistry.com/version/v2.0.0/configure/source-authorities) and [Data Sources](https://docs.geoprismregistry.com/version/v2.0.0/configure/data-sources).

## Geoprism Registry concepts you'll see in Kaleidoscope

You don't need to use Geoprism Registry to use Kaleidoscope, but these concepts show up in it:

| Geoprism Registry concept | What it means in Kaleidoscope |
| ------------------------- | ----------------------------- |
| [Geo-Object Types](https://docs.geoprismregistry.com/version/v2.0.0/configure/geo-objects-and-hierarchies/geographic-object-types-outside-a-group) | The kinds of things you can ask about, such as structures, roads or land parcels. Results are grouped by type. |
| [Codes and labels](https://docs.geoprismregistry.com/version/v2.0.0/geoprism-registry-key-components/content-related-capacities-of-geoprism-registry/5.2-content-related-capacities-of-geoprism-registry-1) | Each object has a code and a label (its name). When several objects have similar names, Kaleidoscope asks you to choose, and you can answer with the code. |
| [Hierarchies](https://docs.geoprismregistry.com/version/v2.0.0/configure/geo-objects-and-hierarchies/hierarchies) and other relationships | The connections between objects, such as a structure and the project area it's located in. They decide which connections you can ask about. |
| [Business Types](https://docs.geoprismregistry.com/version/v2.0.0/configure/business-types) | Records that aren't places, such as projects, linked to the places they relate to. |
| [Source Authorities](https://docs.geoprismregistry.com/version/v2.0.0/configure/source-authorities) and [Data Sources](https://docs.geoprismregistry.com/version/v2.0.0/configure/data-sources) | The organizations responsible for each dataset, and the sources it came from. You can ask Kaleidoscope about them, for example "What is the provenance of this data?" |

To learn more about any of these, follow the links to the [Geoprism Registry documentation](https://docs.geoprismregistry.com/version/v2.0.0).
