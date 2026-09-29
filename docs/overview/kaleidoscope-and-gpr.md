---
title: Kaleidoscope and Geoprism Registry
sidebar_position: 3
---

# Kaleidoscope and Geoprism Registry

[Geoprism Registry](https://docs.geoprismregistry.com/version/v2.0.0/introduction) (GPR) is a translation layer that gets data from authoritative sources into AI. It turns flat data, such as spreadsheets and shapefiles, into a knowledge graph with change over time, controlled vocabularies and provenance. Kaleidoscope is where that knowledge graph is viewed and explored with GeoAI.

Geoprism Registry works in three stages:

1. **Integrate.** Data from authoritative sources is [loaded into Geoprism Registry](https://docs.geoprismregistry.com/version/v2.0.0/curate) and standardized.
2. **Enhance.** Geoprism Registry links records to each other in [hierarchies](https://docs.geoprismregistry.com/version/v2.0.0/configure/geo-objects-and-hierarchies/hierarchies) and other relationships, gives each one a [persistent code](https://docs.geoprismregistry.com/version/v2.0.0/geoprism-registry-key-components/content-related-capacities-of-geoprism-registry/5.2-content-related-capacities-of-geoprism-registry-1), classifies them with [controlled vocabularies](https://docs.geoprismregistry.com/version/v2.0.0/configure/concepts), and records [where each value came from](https://docs.geoprismregistry.com/version/v2.0.0/configure/data-sources) and [when it was valid](https://docs.geoprismregistry.com/version/v2.0.0/geoprism-registry-key-components/content-related-capacities-of-geoprism-registry/change-over-time).
3. **Publish.** Geoprism Registry [publishes](https://docs.geoprismregistry.com/version/v2.0.0/explore) the result as a knowledge graph.

Kaleidoscope uses the published knowledge graph, and doesn't change the data.

:::info
Geoprism Registry stores the data in its knowledge graph, and it's the source of Kaleidoscope's data. It isn't the authoritative source of the data. The organizations that publish each dataset are.
:::

For more about what Geoprism Registry adds to the data, see [How Geoprism Registry prepares the data](../data/geoprism-registry.md).
