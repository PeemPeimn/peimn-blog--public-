import { CosmosClient } from '@azure/cosmos'
import { ENDPOINT, READ_KEY, WRITE_KEY } from '../keys'

const write = new CosmosClient({ endpoint: ENDPOINT, key: WRITE_KEY })
const W_PeimnBlog = write.database("PeimnBlog")
const W_Metadata = W_PeimnBlog.container("Metadata")
const W_Posts = W_PeimnBlog.container("Posts")
const W_Tags = W_PeimnBlog.container("Tags")

const read = new CosmosClient({ endpoint: ENDPOINT, key: READ_KEY })
const R_PeimnBlog = read.database("PeimnBlog")
const R_Metadata = R_PeimnBlog.container("Metadata")
const R_Posts = R_PeimnBlog.container("Posts")
const R_Tags = W_PeimnBlog.container("Tags")


export async function postToDB(BlogHeader, BlogContents) {
  try {
    const { resource: createdPost } = await W_Posts.items.create(BlogContents);
    console.log(`\r\nCreated new post: ${createdPost.id}`);

    let Metadata = BlogHeader
    Metadata["id"] = createdPost.id
    const { resource: createdMetadata } = await W_Metadata.items.create(Metadata);
    console.log(`Created new metadata: ${createdMetadata.id}`);

    const tags = BlogHeader.tags
    const id = BlogHeader.id
    var ops = []
    for ( var tag of tags ) {
      ops.push({
        operationType: "Create",
        resourceBody: { post_id: id, name: tag }
     })
    }

    const { statusCode: result } = W_Tags.items.bulk(ops)
    console.log( result )

  } catch (error) {
    console.error(error);
  }
}

export async function getOnePost(id) {
  //console.log(id)
  const { resource: post } = await R_Posts.item(id, id).read()
  return post
}

export async function getOneMetaData(id) {
  //console.log(id)
  const { resource: meta } = await R_Metadata.item(id, id).read()
  return meta
}

export async function getAllId(category) {
  const querySpec = {
    query: `SELECT c.id from c WHERE c.category='${category}'`
  }

  const { resources: items } = await R_Metadata.items
    .query(querySpec)
    .fetchAll()

  console.log(items)
  return items
}

export async function getAllMetadata(category) {
  const querySpec = {
    query: `SELECT * from c WHERE c.category='${category}' ORDER BY c.postdate DESC`
  }

  const { resources: items } = await R_Metadata.items
    .query(querySpec)
    .fetchAll()

 //console.log(items)
  return items
}

export async function searchMetadata(word) {
  const querySpec = {
    query: `SELECT * from c WHERE LOWER(c.search) LIKE '%${word}%' ORDER BY c.postdate DESC`
  }
  const { resources: items } = await R_Metadata.items
    .query(querySpec)
    .fetchAll()

  //console.log(items)
  return items 
} 

export async function getAllTags() {
  const querySpec = {
    query: `SELECT DISTINCT c.name FROM c ORDER BY c.name ASC`
  }
  const { resources: items } = await R_Tags.items
    .query(querySpec)
    .fetchAll()

  console.log(items)
  return items 
} 
