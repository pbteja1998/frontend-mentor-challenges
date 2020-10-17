const projects = [
  {
    name: 'fylo-data-storage-component',
  },
  {
    name: 'four-card-feature-section',
  },
  {
    name: 'coding-bootcamp-testimonials-slider',
  },
  {
    name: 'base-apparel-coming-soon',
  },
  {
    name: 'article-preview-component',
  },
  {
    name: 'intro-component-with-signup-form',
  },
  {
    name: 'single-price-grid-component',
  },
  {
    name: 'ping-coming-soon-page',
  },
  {
    name: 'huddle-landing-page-with-alternating-feature-blocks',
  },
  {
    name: 'huddle-landing-page-with-single-introductory-section',
  },
  {
    name: 'fylo-landing-page-with-two-column-layout',
  },
  {
    name: 'social-media-dashboard-with-theme-switcher',
  },
  {
    name: 'insure-landing-page',
  },
  {
    name: 'pricing-component-with-toggle',
  },
  {
    name: 'project-tracking-intro-component',
  },
  {
    name: 'job-listings-with-filtering',
    external: true,
    imageSrc:
      'https://raw.githubusercontent.com/pbteja1998/jobs-board/master/frontendmentor/design/desktop-design.jpg',
    previewUrl: 'https://jobs-board.bhanuteja.dev/',
    githubSrc: 'https://github.com/pbteja1998/jobs-board',
  },
  {
    name: 'github-jobs-api',
    external: true,
    imageSrc: 'https://jobs.bhanuteja.dev/preview.jpg',
    previewUrl: 'https://jobs.bhanuteja.dev/',
    githubSrc: 'https://github.com/pbteja1998/github-jobs-api',
  },
]

const list = document.getElementById('list')

projects.forEach(({ name, external, imageSrc, previewUrl, githubSrc }, i) => {
  const listItem = document.createElement('li')
  let imgLink
  let previewLink
  let githubLink

  if (external) {
    imgLink = imageSrc
    previewLink = previewUrl
    githubLink = githubSrc
  } else {
    imgLink = `${name}/design/desktop-design.jpg`
    previewLink = `${name}/index.html`
    githubLink = `https://github.com/pbteja1998/frontend-mentor-challenges/tree/master/${name}`
  }

  listItem.innerHTML = `
      <a href="${previewLink}">
        <img src="${imgLink}" alt="${name}" />
        <p>${i + 1}. ${formatProjectName(name)}</p>
      </a>
      
      <div class="links-container">
        <a href="${previewLink}" class="blue">
          <i class="fas fa-eye"></i>
        </a>
        <a href="${githubLink}" class="blue">
          <i class="fas fa-code"></i>
        </a>
      </div>`
  list.appendChild(listItem)
})

const emptyListItem = document.createElement('li')
list.appendChild(emptyListItem)
list.appendChild(emptyListItem)
list.appendChild(emptyListItem)
list.appendChild(emptyListItem)
list.appendChild(emptyListItem)
list.appendChild(emptyListItem)

function formatProjectName(name) {
  return name
    .split('-')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ')
}
