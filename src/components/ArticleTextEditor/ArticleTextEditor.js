/* eslint-disable no-shadow */
/* eslint-disable max-len */
/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from "react";
import Dante from "Dante2";
import PropTypes from "prop-types";
import TagsInput from "react-tagsinput";
import articleImage from "../../assets/images/article.png";

let currentUploadImagePos = 0;

class ArticleTextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      editorState: this.props.edtrState,
      article: {},
      currentUploadImagePos: 0,
      images: [],
      readTopublish: false,
      blocks: [],
      isUpdating: false,
      slug: ""
    };
    this.handleChangeTags = this.handleChangeTags.bind(this);
    this.getCurrentBlock = this.getCurrentBlock.bind(this);
    this.upDateBlocks = this.upDateBlocks.bind(this);
  }

  componentWillMount() {
    const { tags, slug, isUpdating, images } = this.props;
    this.setState({
      tags: tags || [],
      slug,
      isUpdating: isUpdating || false,
      images
    });
  }

  static getCurrentUploadImagePos = () => currentUploadImagePos;

  getCurrentBlockKey = newBlocks => {
    const out = newBlocks.filter(
      block => !this.state.blocks.includes(block.key)
    )[0];
    if (out) {
      return out.key;
    }
    return newBlocks[newBlocks.length - 1].key;
  };

  getCommonItems = (currentBlocks, newBlocks) => {
    let result = [];
    result = result.concat(
      currentBlocks.filter(item => newBlocks.indexOf(item.key) >= 0)
    );
    return result;
  };

  getCurrentBlockPosition = (blocks, key) => {
    let out = 0;
    for (let i = 0; i < blocks.length; i += 1) {
      if (blocks[i].key === key) {
        out = i;
        break;
      }
    }
    return out;
  };

  getCurrentBlock(blocks) {
    return blocks.find(block => block.key === this.getCurrentBlockKey(blocks));
  }

  isImageAlreadyAdded = key => {
    const image = this.state.blocks.find(blk => blk === key);
    if (image) {
      return true;
    }
    return false;
  };

  upDateBlocks = blocks => {
    const newBlocks = [];
    blocks.forEach(block => {
      newBlocks.push(block.key);
    });
    this.setState({ blocks: newBlocks });
  };

  removeDeletedBlocks = newBlocks => {
    const currentBlocks = this.state.blocks;
    const blocks = this.getCommonItems(currentBlocks, newBlocks);
    this.setState({ blocks });
  };

  save = state => {
    const editorState = state.editorState();
    const title = editorState.getCurrentContent().getFirstBlock().text;
    let data;
    if (
      state.editorContent.blocks.length === 1 &&
      state.editorContent.blocks[0].text === ""
    ) {
      const { editorState } = this.state;
      data = {
        article: {
          body: JSON.stringify(editorState),
          title,
          description: title,
          tagList: this.state.tags
        }
      };
      localStorage.setItem("article", JSON.stringify(data));
      return;
    }
    data = {
      article: {
        body: JSON.stringify(state.editorContent),
        title,
        description: title,
        tagList: this.state.tags
      }
    };

    this.setState({ article: data });

    localStorage.setItem("article", JSON.stringify(data));
  };

  handleSave = state => {
    const { blocks } = state.editorContent;
    const currentBlock = this.getCurrentBlock(blocks);
    const currentBlockKey = this.getCurrentBlockKey(blocks);
    if (
      currentBlock.type === "image" &&
      !this.isImageAlreadyAdded(currentBlockKey)
    ) {
      const { file } = currentBlock.data;
      const currentImagePos = this.getCurrentBlockPosition(
        blocks,
        currentBlockKey
      );
      currentUploadImagePos = currentImagePos;
      this.props.uploadImage(file);
      this.save(state);
    } else {
      this.save(state);
    }
    this.removeDeletedBlocks(blocks);
    this.upDateBlocks(blocks);
  };

  readTopublish = async () => {
    const article = JSON.parse(localStorage.getItem("article"));
    const { blocks } = JSON.parse(article.article.body);
    this.state.images.forEach(image => {
      blocks[image.position].data.url = image.url;
    });
    article.article.body = { blocks };
    return article;
  };

  publishArticleHandler = () => {
    const { tags, article } = this.state;
    const { body, title } = this.props.getFromEditor(article);
    this.props.createArticle({
      title,
      description: body,
      body: JSON.stringify(article),
      tagList: tags.join(",")
    });
  };

  draftArticleHandler = () => {
    const { tags, article } = this.state;
    const { body, title } = this.props.getFromEditor(article);
    this.props.createArticle({
      title,
      description: body,
      body: JSON.stringify(article),
      tagList: tags.join(","),
      draft: true
    });
  };

  updateArtcileHandler = slug => {
    const { tags, article } = this.state;
    const { body, title } = this.props.getFromEditor(article);
    this.props.updateArticle(
      {
        title,
        description: body,
        body: JSON.stringify(article),
        tagList: tags.join(",")
      },
      slug
    );
  };

  handleChangeTags(tags) {
    this.setState({ tags });
  }

  render() {
    const placeholder = (
      <div style={{ fontSize: 25, fontWeight: "bold" }}>Title....</div>
    );
    if (this.state.readTopublish) {
      const { body, title, image } = this.props.getFromEditor(
        this.state.article
      );
      const { tags, slug } = this.state;
      return (
        <div className="publish-wrapper">
          <div
            className="publish-left"
            style={{ background: "white", borderRight: "1px solid silver" }}
          >
            <div className="publish-content-left">
              <div className="article-preview">
                <h2>Article preview</h2>
              </div>
              <h1
                htmlFor="article_title"
                className="article-title-publish"
                onClick={() => this.setState({ readTopublish: false })}
              >
                {title}
              </h1>
              {image !== "/src/assets/images/user.png" ? (
                <img
                  src={image}
                  className="article-title-publish"
                  alt="article-img"
                />
              ) : (
                <img
                  src={articleImage}
                  className="article-title-publish"
                  alt="article-img"
                />
              )}
              <p
                htmlFor="article_description"
                className="article-desc-publish"
                onClick={() => this.setState({ readTopublish: false })}
              >
                {body}
              </p>
            </div>
          </div>
          <div className="publish-right">
            <div className="publish-content-right">
              <div className="tag-title">
                <h4>
                  Add or change tags (up to 5) so readers know what your story
                  is about
                </h4>
              </div>
              <div>
                <TagsInput value={tags} onChange={this.handleChangeTags} />
              </div>
              <div className="publish-buttons">
                <button
                  type="submit"
                  className="publish-button"
                  onClick={
                    this.state.isUpdating
                      ? () => this.updateArtcileHandler(slug)
                      : () => this.publishArticleHandler()
                  }
                >
                  {this.state.isUpdating ? "Apply" : "Publish"}
                </button>
                {!this.state.isUpdating ? (
                  <button
                    className="draft-button"
                    onClick={() => this.draftArticleHandler()}
                  >
                    Save as draft
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <>
        <div className="article-create-container">
          <section className="editor-main-section container">
            <main className="editor-main row mt-6 mb-5">
              <div className="col-lg-9 left-nav">
                <Dante
                  body_placeholder={placeholder}
                  content={this.state.editorState}
                  spellcheck
                  data_storage={{
                    method: "POST",
                    save_handler: this.handleSave,
                    interval: 100,
                    withCredantials: true
                  }}
                />
              </div>
              <div className="">
                <button
                  type="submit"
                  className="publishbutton"
                  onClick={() =>
                    this.readTopublish().then(article => {
                      const { blocks } = article.article.body;
                      this.setState({
                        article,
                        readTopublish: true,
                        editorState: {
                          blocks,
                          entityMap: {}
                        }
                      });
                    })
                  }
                >
                  {this.state.isUpdating
                    ? "Ready to Update"
                    : "Ready to Publish"}
                </button>
              </div>
            </main>
          </section>
        </div>
      </>
    );
  }
}

ArticleTextEditor.propTypes = {
  slug: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  uploadImage: PropTypes.func.isRequired,
  createArticle: PropTypes.func.isRequired,
  edtrState: PropTypes.instanceOf(Object).isRequired,
  updateArticle: PropTypes.func.isRequired,
  getFromEditor: PropTypes.func.isRequired,
  isUpdating: PropTypes.bool.isRequired,
  images: PropTypes.array.isRequired
};

export default ArticleTextEditor;
