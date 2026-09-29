---
title: Glossary
sidebar_position: 5
---

# Glossary

Terms used in Kaleidoscope and this documentation. Where a term comes from Geoprism Registry, the definition matches the [Geoprism Registry documentation](https://docs.geoprismregistry.com/version/v2.0.0) and links to it.

| Term | Definition |
| ---- | ---------- |
| Authoritative source | The organization responsible for a dataset, whose version of the data is the official one. Geoprism Registry records it as the dataset's [Source Authority](https://docs.geoprismregistry.com/version/v2.0.0/configure/source-authorities). |
| Attribute | A piece of information stored about an object, such as a structure's value or a record's code. |
| Code | The identifier of an object's record. Each object has a code that doesn't change, so you can use it to refer to exactly one object and to trace it back to Geoprism Registry. See [Unique identifier](https://docs.geoprismregistry.com/version/v2.0.0/geoprism-registry-key-components/content-related-capacities-of-geoprism-registry/5.2-content-related-capacities-of-geoprism-registry-1) in the Geoprism Registry documentation. |
| Controlled vocabulary | An agreed list of terms used to classify things, so the same kind of thing is always recorded the same way. In Geoprism Registry, these terms are called [Concepts](https://docs.geoprismregistry.com/version/v2.0.0/configure/concepts). |
| Data release | A delivery of new or updated data from Geoprism Registry to Kaleidoscope. See [Data releases](../data/data-releases.md). |
| Data Source | A description of where data in Geoprism Registry came from, such as a database, a survey or an open dataset. See [Data Sources](https://docs.geoprismregistry.com/version/v2.0.0/configure/data-sources) in the Geoprism Registry documentation. |
| Flood scenario | A modelled set of flood conditions, such as flooding with or without planned mitigation measures. Kaleidoscope can show what's at risk under each scenario. |
| GeoAI | Artificial intelligence applied to geographic data and questions about places. |
| Geo-Graph RAG | The approach Kaleidoscope is built on: the AI answers by querying a spatial knowledge graph, rather than by searching documents. See [Why Geo-Graph RAG](why-geo-graph-rag.md). |
| Geo-Object | A geographic object: the computer representation of a geographic feature, such as a structure, a road or a creek. See [Geographic features and geographic objects](https://docs.geoprismregistry.com/version/v2.0.0/geoprism-registry-key-components/content/geographic-features-and-objects) in the Geoprism Registry documentation. |
| Geoprism Registry (GPR) | A translation layer that brings data from authoritative sources into AI, by turning flat data into a knowledge graph with change over time, controlled vocabularies and provenance. It's the source of Kaleidoscope's data, but not the authoritative source. See [How Geoprism Registry prepares the data](../data/geoprism-registry.md). |
| Geospatial Knowledge Infrastructure (GKI) | Geospatial data from authoritative sources, connected and published as knowledge, so that tools such as Kaleidoscope can use it. |
| Knowledge graph | Data stored as things and the relationships between them, so that a computer can follow the connections. |
| Label | The name of an object, as shown in Kaleidoscope. Several objects can share a label, so Kaleidoscope sometimes asks which one you mean. |
| Mitigation measure | Planned work that reduces flood risk, such as a floodwall, riprap placement or slope repair. |
| Project area | The area a USACE project covers. Questions about a study area are usually about a project area. |
| Provenance | A record of where data came from and who is responsible for it. Geoprism Registry records it with [Source Authorities](https://docs.geoprismregistry.com/version/v2.0.0/configure/source-authorities) and [Data Sources](https://docs.geoprismregistry.com/version/v2.0.0/configure/data-sources). |
| RAG (retrieval-augmented generation) | An approach where the AI looks up relevant information before it answers, instead of relying on what it remembers. |
| Relationship | A recorded connection between two objects, such as a structure being located in a project area. |
| Source Authority | Who is responsible for a piece of data, and what type of organization they are, such as a government agency or a mapping agency. See [Source Authorities](https://docs.geoprismregistry.com/version/v2.0.0/configure/source-authorities) in the Geoprism Registry documentation. |
| Spatial knowledge graph | A knowledge graph that also records where each thing is, so that questions about location can be answered and the results shown on a map. |
| Structure | A building, such as a home or business, recorded with values such as the value of the structure and its contents. |
| SPARQL | A standard language for querying knowledge graphs. Kaleidoscope's AI writes SPARQL queries to answer your questions. |
