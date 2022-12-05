const User = require('./User');
const Article = require('./Article');
const Comment = require('./Comment');

User.hasMany(Article, {
    foreignKey: 'user_id',
});
User.hasMany(Comment, {
    foreignKey: 'user_id',
});

Article.belongsTo(User, {
    foreignKey: 'article_id',
});

Article.hasMany(Comments, {
    foreignKey: 'article_id',
});

Comment.belongsTo(Article, {
    foreignKey: 'comment_id',
});
Comment.belongsTo(User, {
    foreignKey: 'comment_id',
});




module.exports = { User, Article, Comment };
