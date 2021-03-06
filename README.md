# CubeSat
Case study for Sparse MBSE Information Model

<img src="images/Alen-Space-CubeSats-sketch-400x573.png" width="300">

# Small Satellite Applications

https://info.alen.space/small-satellite-applications-businesses-in-space-to-start-now

* [Case Study](./common/lume-1-cubesat-case-study-updated.pdf)

# WebView Model
https://coordinated-systems-lab.github.io/cube-sat/

# [GraphQL](https://graphql.org/) Model Exchange

<img src="images/graphql.png" width="200">

* [GENESYS 'Essential' (Sparse) MBSE GraphQL Schema](./graphql/mbse-metamodel.graphql)
* [CubeSat Case Study System Model](./graphql/fire-sensing.json)

# GraphQL Playground
https://sim-graphql.vercel.app/

A few sample queries:
```
query Projects {
  cpsProjectsQuery {
    status {
      code
    }
    projects {
      id
      name
    }
  }
}
```
```
query Organizations {
  cpsSystemModelQuery (projectId: "f3d9d2c6-6332-47e4-910a-24514a5b5682") {
    cpsSystemModel {
      project {
        name
      }
      organization {
        identity {
          name
        }
      }
    }
  }
}
```
```
query UseCases {
  cpsSystemModelQuery(projectId: "f3d9d2c6-6332-47e4-910a-24514a5b5682") {
    cpsSystemModel {
      project {
        name
      }
      useCase {
        identity {
          number
          name
        }
      }
    }
  }
}
```
```
query Requirements {
  cpsSystemModelQuery(projectId: "f3d9d2c6-6332-47e4-910a-24514a5b5682") {
    cpsSystemModel {
      project {
        name
      }
      requirement {
        identity {
          number,
          name
        }
        attributes {
          description
        }
      }
    }
  }
}
```
