import { PrismaClient } from "@postgres-client";

const prisma = new PrismaClient();

async function main() {
  console.log("Starting database seed...");

  await prisma.auth_methods.createMany({
    data: [
      { provider: "email", auth_method: "Social" },
      { provider: "google", auth_method: "Social" },
      { provider: "github", auth_method: "Social" },
      { provider: "kakao", auth_method: "Social" },
    ],
  });

  await prisma.positions.createMany({
    data: [
      { name: "팀 생성자" },
      { name: "프론트엔드" },
      { name: "백엔드" },
      { name: "풀스택" },
      { name: "모바일" },
      { name: "데브옵스" },
      { name: "데이터 엔지니어" },
      { name: "데이터 사이언티스트" },
      { name: "AI 엔지니어" },
      { name: "보안 엔지니어" },
      { name: "디자이너" },
      { name: "프로덕트 매니저" },
      { name: "프로덕트 오너" },
      { name: "프로덕트 책임자" },
    ],
  });

  const existingStacks = await prisma.stacks.findMany();
  if (existingStacks.length > 0) {
    console.log("Database already seeded, skipping...");
    return;
  }

  const categories = await prisma.stack_categories.findMany();

  if (categories.length === 0) {
    console.log("Creating stack categories...");
    await prisma.stack_categories.createMany({
      data: [
        { name: "Libraries" },
        { name: "Frameworks" },
        { name: "Engines" },
        { name: "Languages" },
        { name: "Databases" },
        { name: "Tools" },
      ],
    });
  }

  const stack_categories = await prisma.stack_categories.findMany();

  const categoryMap = {
    Libraries: stack_categories.find((cat) => cat.name === "Libraries")?.id,
    Frameworks: stack_categories.find((cat) => cat.name === "Frameworks")?.id,
    Engines: stack_categories.find((cat) => cat.name === "Engines")?.id,
    Languages: stack_categories.find((cat) => cat.name === "Languages")?.id,
    Databases: stack_categories.find((cat) => cat.name === "Databases")?.id,
    Tools: stack_categories.find((cat) => cat.name === "Tools")?.id,
  };

  if (
    !categoryMap.Libraries ||
    !categoryMap.Frameworks ||
    !categoryMap.Engines ||
    !categoryMap.Languages ||
    !categoryMap.Databases ||
    !categoryMap.Tools
  ) {
    throw new Error("Required categories not found");
  }

  console.log("Creating stacks...");
  await prisma.stacks.createMany({
    data: [
      {
        name: "React",
        img_url:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
        category_id: categoryMap.Libraries,
      },
      {
        name: "Redux",
        img_url:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
        category_id: categoryMap.Libraries,
      },
      {
        name: "axios",
        img_url:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-original.svg",
        category_id: categoryMap.Libraries,
      },
      {
        name: "Next.js",
        img_url:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg",
        category_id: categoryMap.Frameworks,
      },
      {
        name: "Vue.js",
        img_url:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original-wordmark.svg",
        category_id: categoryMap.Frameworks,
      },
      {
        name: "Nuxt.js",
        img_url:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original-wordmark.svg",
        category_id: categoryMap.Frameworks,
      },
      {
        name: "Svelte",
        img_url:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg",
        category_id: categoryMap.Frameworks,
      },
      {
        name: "Astro",
        img_url:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg",
        category_id: categoryMap.Frameworks,
      },
      {
        name: "Gatsby",
        img_url:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gatsby/gatsby-original.svg",
        category_id: categoryMap.Frameworks,
      },
      {
        name: "Spring",
        img_url:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
        category_id: categoryMap.Frameworks,
      },
      {
        name: "Nest.js",
        img_url:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original-wordmark.svg",
        category_id: categoryMap.Frameworks,
      },
      {
        name: "Tailwind CSS",
        img_url:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain.svg",
        category_id: categoryMap.Frameworks,
      },
      {
        name: "JavaScript",
        img_url:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        category_id: categoryMap.Languages,
      },
      {
        name: "Python",
        img_url:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        category_id: categoryMap.Languages,
      },
      {
        name: "Java",
        img_url:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        category_id: categoryMap.Languages,
      },
      {
        name: "C++",
        img_url:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
        category_id: categoryMap.Languages,
      },
      {
        name: "C#",
        img_url:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
        category_id: categoryMap.Languages,
      },
      {
        name: "C",
        img_url:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
        category_id: categoryMap.Languages,
      },
      {
        name: "PostgreSQL",
        img_url:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        category_id: categoryMap.Databases,
      },
      {
        name: "MySQL",
        img_url:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
        category_id: categoryMap.Databases,
      },
      {
        name: "MongoDB",
        img_url:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
        category_id: categoryMap.Databases,
      },
      {
        name: "Redis",
        img_url:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
        category_id: categoryMap.Databases,
      },
      {
        name: "Elasticsearch",
        img_url:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elasticsearch/elasticsearch-original.svg",
        category_id: categoryMap.Databases,
      },
      {
        name: "Docker",
        img_url:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        category_id: categoryMap.Tools,
      },
      {
        name: "Kubernetes",
        img_url:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg",
        category_id: categoryMap.Tools,
      },
      {
        name: "AWS",
        img_url:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg",
        category_id: categoryMap.Tools,
      },
      {
        name: "Prisma",
        img_url:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
        category_id: categoryMap.Tools,
      },
      {
        name: "Git",
        img_url:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        category_id: categoryMap.Tools,
      },
      {
        name: "GitHub",
        img_url:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        category_id: categoryMap.Tools,
      },
      {
        name: "Jira",
        img_url:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg",
        category_id: categoryMap.Tools,
      },
      {
        name: "Slack",
        img_url:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg",
        category_id: categoryMap.Tools,
      },
      {
        name: "Figma",
        img_url:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
        category_id: categoryMap.Tools,
      },
      {
        name: "Notion",
        img_url:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg",
        category_id: categoryMap.Tools,
      },
      {
        name: "Node.js",
        img_url:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
        category_id: categoryMap.Engines,
      },
      {
        name: "Express",
        img_url:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
        category_id: categoryMap.Libraries,
      },
    ],
  });

  await prisma.images.createMany({
    data: [
      {
        url: "images/profileImages/adventure.png",
        content_type: "png",
      },
      {
        url: "images/profileImages/bicycle.png",
        content_type: "png",
      },
      {
        url: "images/profileImages/camping.png",
        content_type: "png",
      },
      {
        url: "images/profileImages/christmas.png",
        content_type: "png",
      },
      {
        url: "images/profileImages/cook.png",
        content_type: "png",
      },
      {
        url: "images/profileImages/cook2.png",
        content_type: "png",
      },
      {
        url: "images/profileImages/drink.png",
        content_type: "png",
      },
      {
        url: "images/profileImages/fishing.png",
        content_type: "png",
      },
      {
        url: "images/profileImages/game.png",
        content_type: "png",
      },
      {
        url: "images/profileImages/gardening.png",
        content_type: "png",
      },
      {
        url: "images/profileImages/halloween.png",
        content_type: "png",
      },
      {
        url: "images/profileImages/image 32.png",
        content_type: "png",
      },
      {
        url: "images/profileImages/lolipop.png",
        content_type: "png",
      },
      {
        url: "images/profileImages/mad.png",
        content_type: "png",
      },
      {
        url: "images/profileImages/magic.png",
        content_type: "png",
      },
      {
        url: "images/profileImages/mith",
        content_type: "png",
      },
      {
        url: "images/profileImages/music.png",
        content_type: "png",
      },
      {
        url: "images/profileImages/nature.png",
        content_type: "png",
      },
      {
        url: "images/profileImages/nurse.png",
        content_type: "png",
      },
      {
        url: "images/profileImages/paint.png",
        content_type: "png",
      },
      {
        url: "images/profileImages/party.png",
        content_type: "png",
      },
      {
        url: "images/profileImages/picknick.png",
        content_type: "png",
      },
      {
        url: "images/profileImages/reading.png",
        content_type: "png",
      },
      {
        url: "images/profileImages/saddness.png",
        content_type: "png",
      },
      {
        url: "images/profileImages/science.png",
        content_type: "png",
      },

      {
        url: "images/profileImages/shy.png",
        content_type: "png",
      },
      {
        url: "images/profileImages/snowman.png",
        content_type: "png",
      },
      {
        url: "images/profileImages/study.png",
        content_type: "png",
      },
      {
        url: "images/profileImages/surprise.png",
        content_type: "png",
      },
      {
        url: "images/profileImages/walk.png",
        content_type: "png",
      },
      {
        url: "images/profileImages/workout.png",
        content_type: "png",
      },
    ],
  });

  console.log("Seed completed successfully!");
}

main()
  .catch((e) => {
    console.error("Seed failed:", e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
