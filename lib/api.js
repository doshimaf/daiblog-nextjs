import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), 'posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
};

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    };
    if (field === 'content') {
      items[field] = content;
    };

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    };
  });

  return items;
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts;
};

// tag cloud
export function getAllTags() {
  // const allTags = getAllPosts(['tags']);
  // return allTags
  return getAllPosts(['tags'])
    .map(post => post.tags)
    .flat()
    .filter((e, i, a) => a.indexOf(e) === i)
    // .map((tagText) => {
    //   const tagId = tagText.toLowerCase()
    //   return {
    //     id: tagId,
    //     text: tagText,
    //     count: allTags.filter(post => post.tags.indexOf(tagText) > -1).length
    //   };
    // });
};

// tag archive
// export function getPostsByTag(tag, fields = []) {
//   const posts = getAllPosts(fields).filter((post) => {
//     return post.tags.map(t => t.toLowerCase()).indexOf(tag.toLowerCase()) > -1
//   });
//   return posts
// };