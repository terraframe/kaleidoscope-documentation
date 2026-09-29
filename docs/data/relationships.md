---
title: "How relationships are built"
sidebar_position: 4
draft: true
---

:::note[Draft]
This page hasn't been written yet, and it's left out of production builds. Its outline:
:::

Plain-language explanation of the connections that make spatial questions possible. Keep examples illustrative, not a list of what's in the graph.

- **Location:** "is located in", such as a structure in a project area.
- **Flood risk:** "is at risk of flooding in", linking objects to a flood scenario.
- **Mitigation:** "is mitigated by", linking to mitigation measures such as floodwalls or riprap.
- **Hydrology:** "flows into", such as one creek flowing into another.
- (Current SPN edges: LocatedIn, HasFloodRisk, HasMitigation, FlowsInto. Check directions in APP-NOTES before describing them.)
- Why this matters: multi-hop questions ("the value of structures in the project area at risk in the No Mitigation Scenario") are answerable because the links exist in the graph, not because the AI infers them.
- Visual: a small example graph (Mermaid).
