$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            link: 'https://moguranosenshi.sakura.ne.jp/publications/ipsj87-arakawa.pdf',
            title: '【学生奨励賞】大規模言語モデルによる観光雑誌の文章校正',
            author: '荒川花蓮, 加勢田健照, 渡部智裕, 眞鍋光汰, 梶原智之, 二宮崇, 後藤功雄',
            publisher: '情報処理学会第87回全国大会, pp.889-890, 2025',
            technologies: ['Python', 'Streamlit', 'LLM', 'NLP'],
        }
        
    ]

    let projects = [];
    projects = projects_obj.map(project_mapper);
    // if(slug == 'all') {
    //     projects = projects_obj.map(project_mapper);
    // } 
    // else {
    //     projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    // }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">
                <div class="card__content card__padding">
                    <article class="card__article">
                        <h2><a href="${project.link}" target=top>${project.title}</a></h2>
                        <p class="paragraph-text-normal">${project.author} </p>
                        <p class="paragraph-text-normal">${project.publisher} </p>
                    </article>
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>
                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}