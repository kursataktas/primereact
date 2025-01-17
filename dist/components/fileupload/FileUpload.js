"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileUpload = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = require("../button/Button");

var _Messages = require("../messages/Messages");

var _ProgressBar = require("../progressbar/ProgressBar");

var _DomHandler = _interopRequireDefault(require("../utils/DomHandler"));

var _ClassNames = require("../utils/ClassNames");

var _Ripple = require("../ripple/Ripple");

var _ObjectUtils = _interopRequireDefault(require("../utils/ObjectUtils"));

var _Locale = require("../api/Locale");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FileUpload = /*#__PURE__*/function (_Component) {
  _inherits(FileUpload, _Component);

  var _super = _createSuper(FileUpload);

  function FileUpload(props) {
    var _this;

    _classCallCheck(this, FileUpload);

    _this = _super.call(this, props);
    _this.state = {
      files: [],
      msgs: [],
      focused: false
    };
    _this.choose = _this.choose.bind(_assertThisInitialized(_this));
    _this.upload = _this.upload.bind(_assertThisInitialized(_this));
    _this.clear = _this.clear.bind(_assertThisInitialized(_this));
    _this.onFileSelect = _this.onFileSelect.bind(_assertThisInitialized(_this));
    _this.onDragEnter = _this.onDragEnter.bind(_assertThisInitialized(_this));
    _this.onDragOver = _this.onDragOver.bind(_assertThisInitialized(_this));
    _this.onDragLeave = _this.onDragLeave.bind(_assertThisInitialized(_this));
    _this.onDrop = _this.onDrop.bind(_assertThisInitialized(_this));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_this));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    _this.onSimpleUploaderClick = _this.onSimpleUploaderClick.bind(_assertThisInitialized(_this));
    _this.duplicateIEEvent = false;
    return _this;
  }

  _createClass(FileUpload, [{
    key: "hasFiles",
    value: function hasFiles() {
      return this.state.files && this.state.files.length > 0;
    }
  }, {
    key: "isImage",
    value: function isImage(file) {
      return /^image\//.test(file.type);
    }
  }, {
    key: "chooseDisabled",
    value: function chooseDisabled() {
      return this.props.disabled || this.props.fileLimit && this.props.fileLimit <= this.state.files.length + this.uploadedFileCount;
    }
  }, {
    key: "uploadDisabled",
    value: function uploadDisabled() {
      return this.props.disabled || !this.hasFiles();
    }
  }, {
    key: "cancelDisabled",
    value: function cancelDisabled() {
      return this.props.disabled || !this.hasFiles();
    }
  }, {
    key: "chooseButtonLabel",
    value: function chooseButtonLabel() {
      return this.props.chooseLabel || this.props.chooseOptions.label || (0, _Locale.localeOption)('choose');
    }
  }, {
    key: "uploadButtonLabel",
    value: function uploadButtonLabel() {
      return this.props.uploadLabel || this.props.uploadOptions.label || (0, _Locale.localeOption)('upload');
    }
  }, {
    key: "cancelButtonLabel",
    value: function cancelButtonLabel() {
      return this.props.cancelLabel || this.props.cancelOptions.label || (0, _Locale.localeOption)('cancel');
    }
  }, {
    key: "remove",
    value: function remove(event, index) {
      this.clearInputElement();

      var currentFiles = _toConsumableArray(this.state.files);

      var removedFile = this.state.files[index];
      currentFiles.splice(index, 1);
      this.setState({
        files: currentFiles
      });

      if (this.props.onRemove) {
        this.props.onRemove({
          originalEvent: event,
          file: removedFile
        });
      }
    }
  }, {
    key: "clearInputElement",
    value: function clearInputElement() {
      if (this.fileInput) {
        this.fileInput.value = '';
      }
    }
  }, {
    key: "clearIEInput",
    value: function clearIEInput() {
      if (this.fileInput) {
        this.duplicateIEEvent = true; //IE11 fix to prevent onFileChange trigger again

        this.fileInput.value = '';
      }
    }
  }, {
    key: "formatSize",
    value: function formatSize(bytes) {
      if (bytes === 0) {
        return '0 B';
      }

      var k = 1000,
          dm = 3,
          sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
          i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
  }, {
    key: "onFileSelect",
    value: function onFileSelect(event) {
      var _this2 = this;

      if (event.type !== 'drop' && this.isIE11() && this.duplicateIEEvent) {
        this.duplicateIEEvent = false;
        return;
      }

      this.setState({
        msgs: []
      });
      this.files = this.state.files || [];
      var files = event.dataTransfer ? event.dataTransfer.files : event.target.files;

      for (var i = 0; i < files.length; i++) {
        var file = files[i];

        if (!this.isFileSelected(file)) {
          if (this.validate(file)) {
            if (this.isImage(file)) {
              file.objectURL = window.URL.createObjectURL(file);
            }

            this.files.push(file);
          }
        }
      }

      this.setState({
        files: this.files
      }, function () {
        if (_this2.hasFiles() && _this2.props.auto) {
          _this2.upload();
        }
      });

      if (this.props.onSelect) {
        this.props.onSelect({
          originalEvent: event,
          files: files
        });
      }

      if (event.type !== 'drop' && this.isIE11()) {
        this.clearIEInput();
      } else {
        this.clearInputElement();
      }

      if (this.props.mode === 'basic' && this.files.length > 0) {
        this.fileInput.style.display = 'none';
      }
    }
  }, {
    key: "isFileSelected",
    value: function isFileSelected(file) {
      var _iterator = _createForOfIteratorHelper(this.state.files),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var sFile = _step.value;
          if (sFile.name + sFile.type + sFile.size === file.name + file.type + file.size) return true;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return false;
    }
  }, {
    key: "isIE11",
    value: function isIE11() {
      return !!window['MSInputMethodContext'] && !!document['documentMode'];
    }
  }, {
    key: "validate",
    value: function validate(file) {
      if (this.props.maxFileSize && file.size > this.props.maxFileSize) {
        var message = {
          severity: 'error',
          summary: this.props.invalidFileSizeMessageSummary.replace('{0}', file.name),
          detail: this.props.invalidFileSizeMessageDetail.replace('{0}', this.formatSize(this.props.maxFileSize))
        };

        if (this.props.mode === 'advanced') {
          this.messagesUI.show(message);
        }

        if (this.props.onValidationFail) {
          this.props.onValidationFail(file);
        }

        return false;
      }

      return true;
    }
  }, {
    key: "upload",
    value: function upload() {
      var _this3 = this;

      if (this.props.customUpload) {
        if (this.props.fileLimit) {
          this.uploadedFileCount += this.state.files.length;
        }

        if (this.props.uploadHandler) {
          this.props.uploadHandler({
            files: this.state.files,
            options: {
              clear: this.clear,
              props: this.props
            }
          });
        }
      } else {
        this.setState({
          msgs: []
        });
        var xhr = new XMLHttpRequest();
        var formData = new FormData();

        if (this.props.onBeforeUpload) {
          this.props.onBeforeUpload({
            'xhr': xhr,
            'formData': formData
          });
        }

        var _iterator2 = _createForOfIteratorHelper(this.state.files),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var file = _step2.value;
            formData.append(this.props.name, file, file.name);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        xhr.upload.addEventListener('progress', function (event) {
          if (event.lengthComputable) {
            _this3.setState({
              progress: Math.round(event.loaded * 100 / event.total)
            }, function () {
              if (_this3.props.onProgress) {
                _this3.props.onProgress({
                  originalEvent: event,
                  progress: _this3.state.progress
                });
              }

              ;
            });
          }
        });

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            _this3.setState({
              progress: 0
            });

            if (xhr.status >= 200 && xhr.status < 300) {
              if (_this3.props.fileLimit) {
                _this3.uploadedFileCount += _this3.state.files.length;
              }

              if (_this3.props.onUpload) {
                _this3.props.onUpload({
                  xhr: xhr,
                  files: _this3.state.files
                });
              }
            } else {
              if (_this3.props.onError) {
                _this3.props.onError({
                  xhr: xhr,
                  files: _this3.state.files
                });
              }
            }

            _this3.clear();
          }
        };

        xhr.open('POST', this.props.url, true);

        if (this.props.onBeforeSend) {
          this.props.onBeforeSend({
            'xhr': xhr,
            'formData': formData
          });
        }

        xhr.withCredentials = this.props.withCredentials;
        xhr.send(formData);
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      this.setState({
        files: []
      });

      if (this.props.onClear) {
        this.props.onClear();
      }

      this.clearInputElement();
    }
  }, {
    key: "choose",
    value: function choose() {
      this.fileInput.click();
    }
  }, {
    key: "onFocus",
    value: function onFocus() {
      this.setState({
        focused: true
      });
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      this.setState({
        focused: false
      });
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      if (event.which === 13) {
        // enter
        this.choose();
      }
    }
  }, {
    key: "onDragEnter",
    value: function onDragEnter(event) {
      if (!this.props.disabled) {
        event.stopPropagation();
        event.preventDefault();
      }
    }
  }, {
    key: "onDragOver",
    value: function onDragOver(event) {
      if (!this.props.disabled) {
        _DomHandler.default.addClass(this.content, 'p-fileupload-highlight');

        event.stopPropagation();
        event.preventDefault();
      }
    }
  }, {
    key: "onDragLeave",
    value: function onDragLeave(event) {
      if (!this.props.disabled) {
        _DomHandler.default.removeClass(this.content, 'p-fileupload-highlight');
      }
    }
  }, {
    key: "onDrop",
    value: function onDrop(event) {
      if (!this.props.disabled) {
        _DomHandler.default.removeClass(this.content, 'p-fileupload-highlight');

        event.stopPropagation();
        event.preventDefault();
        var files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
        var allowDrop = this.props.multiple || files && files.length === 1;

        if (allowDrop) {
          this.onFileSelect(event);
        }
      }
    }
  }, {
    key: "onSimpleUploaderClick",
    value: function onSimpleUploaderClick() {
      if (this.hasFiles()) {
        this.upload();
      } else {
        this.fileInput.click();
      }
    }
  }, {
    key: "renderChooseButton",
    value: function renderChooseButton() {
      var _this4 = this;

      var _this$props$chooseOpt = this.props.chooseOptions,
          className = _this$props$chooseOpt.className,
          style = _this$props$chooseOpt.style,
          icon = _this$props$chooseOpt.icon,
          iconOnly = _this$props$chooseOpt.iconOnly;
      var chooseClassName = (0, _ClassNames.classNames)('p-button p-fileupload-choose p-component', {
        'p-disabled': this.props.disabled,
        'p-focus': this.state.focused,
        'p-button-icon-only': iconOnly
      }, className);
      var chooseIconClassName = (0, _ClassNames.classNames)('p-button-icon p-button-icon-left p-clickable', {
        'pi pi-fw pi-plus': !icon
      }, icon);
      var labelClassName = 'p-button-label p-clickable';
      var label = iconOnly ? /*#__PURE__*/_react.default.createElement("span", {
        className: labelClassName,
        dangerouslySetInnerHTML: {
          __html: "&nbsp;"
        }
      }) : /*#__PURE__*/_react.default.createElement("span", {
        className: labelClassName
      }, this.chooseButtonLabel());
      return /*#__PURE__*/_react.default.createElement("span", {
        className: chooseClassName,
        style: style,
        onClick: this.choose,
        onKeyDown: this.onKeyDown,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        tabIndex: 0
      }, /*#__PURE__*/_react.default.createElement("input", {
        ref: function ref(el) {
          return _this4.fileInput = el;
        },
        type: "file",
        onChange: this.onFileSelect,
        multiple: this.props.multiple,
        accept: this.props.accept,
        disabled: this.chooseDisabled()
      }), /*#__PURE__*/_react.default.createElement("span", {
        className: chooseIconClassName
      }), label, /*#__PURE__*/_react.default.createElement(_Ripple.Ripple, null));
    }
  }, {
    key: "renderFile",
    value: function renderFile(file, index) {
      var _this5 = this;

      var preview = this.isImage(file) ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
        alt: file.name,
        role: "presentation",
        src: file.objectURL,
        width: this.props.previewWidth
      })) : null;

      var fileName = /*#__PURE__*/_react.default.createElement("div", {
        className: "p-fileupload-filename"
      }, file.name);

      var size = /*#__PURE__*/_react.default.createElement("div", null, this.formatSize(file.size));

      var removeButton = /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Button.Button, {
        type: "button",
        icon: "pi pi-times",
        onClick: function onClick(e) {
          return _this5.remove(e, index);
        }
      }));

      var content = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, preview, fileName, size, removeButton);

      if (this.props.itemTemplate) {
        var defaultContentOptions = {
          onRemove: function onRemove(event) {
            return _this5.remove(event, index);
          },
          previewElement: preview,
          fileNameElement: fileName,
          sizeElement: size,
          removeElement: removeButton,
          formatSize: this.formatSize(file.size),
          element: content,
          props: this.props
        };
        content = _ObjectUtils.default.getJSXElement(this.props.itemTemplate, file, defaultContentOptions);
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "p-fileupload-row",
        key: file.name + file.type + file.size
      }, content);
    }
  }, {
    key: "renderFiles",
    value: function renderFiles() {
      var _this6 = this;

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "p-fileupload-files"
      }, this.state.files.map(function (file, index) {
        return _this6.renderFile(file, index);
      }));
    }
  }, {
    key: "renderEmptyContent",
    value: function renderEmptyContent() {
      if (this.props.emptyTemplate && !this.hasFiles()) {
        return _ObjectUtils.default.getJSXElement(this.props.emptyTemplate, this.props);
      }

      return null;
    }
  }, {
    key: "renderAdvanced",
    value: function renderAdvanced() {
      var _this7 = this;

      var className = (0, _ClassNames.classNames)('p-fileupload p-fileupload-advanced p-component', this.props.className);
      var headerClassName = (0, _ClassNames.classNames)('p-fileupload-buttonbar', this.props.headerClassName);
      var contentClassName = (0, _ClassNames.classNames)('p-fileupload-content', this.props.contentClassName);
      var uploadButton, cancelButton, filesList, progressBar;
      var chooseButton = this.renderChooseButton();
      var emptyContent = this.renderEmptyContent();

      if (!this.props.auto) {
        var uploadOptions = this.props.uploadOptions;
        var cancelOptions = this.props.cancelOptions;
        var uploadLabel = !uploadOptions.iconOnly ? this.uploadButtonLabel() : '';
        var cancelLabel = !cancelOptions.iconOnly ? this.cancelButtonLabel() : '';
        uploadButton = /*#__PURE__*/_react.default.createElement(_Button.Button, {
          type: "button",
          label: uploadLabel,
          icon: uploadOptions.icon || 'pi pi-upload',
          onClick: this.upload,
          disabled: this.uploadDisabled(),
          style: uploadOptions.style,
          className: uploadOptions.className
        });
        cancelButton = /*#__PURE__*/_react.default.createElement(_Button.Button, {
          type: "button",
          label: cancelLabel,
          icon: cancelOptions.icon || 'pi pi-times',
          onClick: this.clear,
          disabled: this.cancelDisabled(),
          style: cancelOptions.style,
          className: cancelOptions.className
        });
      }

      if (this.hasFiles()) {
        filesList = this.renderFiles();
        progressBar = /*#__PURE__*/_react.default.createElement(_ProgressBar.ProgressBar, {
          value: this.state.progress,
          showValue: false
        });
      }

      var header = /*#__PURE__*/_react.default.createElement("div", {
        className: headerClassName,
        style: this.props.headerStyle
      }, chooseButton, uploadButton, cancelButton);

      if (this.props.headerTemplate) {
        var defaultContentOptions = {
          className: headerClassName,
          chooseButton: chooseButton,
          uploadButton: uploadButton,
          cancelButton: cancelButton,
          element: header,
          props: this.props
        };
        header = _ObjectUtils.default.getJSXElement(this.props.headerTemplate, defaultContentOptions);
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        id: this.props.id,
        className: className,
        style: this.props.style
      }, header, /*#__PURE__*/_react.default.createElement("div", {
        ref: function ref(el) {
          _this7.content = el;
        },
        className: contentClassName,
        style: this.props.contentStyle,
        onDragEnter: this.onDragEnter,
        onDragOver: this.onDragOver,
        onDragLeave: this.onDragLeave,
        onDrop: this.onDrop
      }, progressBar, /*#__PURE__*/_react.default.createElement(_Messages.Messages, {
        ref: function ref(el) {
          return _this7.messagesUI = el;
        }
      }), filesList, emptyContent));
    }
  }, {
    key: "renderBasic",
    value: function renderBasic() {
      var _this8 = this;

      var chooseOptions = this.props.chooseOptions;
      var className = (0, _ClassNames.classNames)('p-fileupload p-fileupload-basic p-component', this.props.className);
      var buttonClassName = (0, _ClassNames.classNames)('p-button p-component p-fileupload-choose', {
        'p-fileupload-choose-selected': this.hasFiles(),
        'p-disabled': this.props.disabled,
        'p-focus': this.state.focused
      }, chooseOptions.className);
      var iconClassName = (0, _ClassNames.classNames)('p-button-icon p-button-icon-left pi', {
        'pi-plus': !chooseOptions.icon && (!this.hasFiles() || this.props.auto),
        'pi-upload': !chooseOptions.icon && this.hasFiles() && !this.props.auto
      }, chooseOptions.icon);
      var labelClassName = 'p-button-label p-clickable';
      var chooseLabel = chooseOptions.iconOnly ? /*#__PURE__*/_react.default.createElement("span", {
        className: labelClassName,
        dangerouslySetInnerHTML: {
          __html: "&nbsp;"
        }
      }) : /*#__PURE__*/_react.default.createElement("span", {
        className: labelClassName
      }, this.chooseButtonLabel());
      var label = this.props.auto ? chooseLabel : /*#__PURE__*/_react.default.createElement("span", {
        className: labelClassName
      }, this.hasFiles() ? this.state.files[0].name : chooseLabel);

      var icon = /*#__PURE__*/_react.default.createElement("span", {
        className: iconClassName
      });

      return /*#__PURE__*/_react.default.createElement("div", {
        className: className,
        style: this.props.style
      }, /*#__PURE__*/_react.default.createElement(_Messages.Messages, {
        ref: function ref(el) {
          return _this8.messagesUI = el;
        }
      }), /*#__PURE__*/_react.default.createElement("span", {
        className: buttonClassName,
        style: chooseOptions.style,
        onMouseUp: this.onSimpleUploaderClick,
        onKeyDown: this.onKeyDown,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        tabIndex: 0
      }, icon, label, !this.hasFiles() && /*#__PURE__*/_react.default.createElement("input", {
        ref: function ref(el) {
          return _this8.fileInput = el;
        },
        type: "file",
        accept: this.props.accept,
        multiple: this.props.multiple,
        disabled: this.props.disabled,
        onChange: this.onFileSelect
      }), /*#__PURE__*/_react.default.createElement(_Ripple.Ripple, null)));
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.mode === 'advanced') return this.renderAdvanced();else if (this.props.mode === 'basic') return this.renderBasic();
    }
  }]);

  return FileUpload;
}(_react.Component);

exports.FileUpload = FileUpload;

_defineProperty(FileUpload, "defaultProps", {
  id: null,
  name: null,
  url: null,
  mode: 'advanced',
  multiple: false,
  accept: null,
  disabled: false,
  auto: false,
  maxFileSize: null,
  invalidFileSizeMessageSummary: '{0}: Invalid file size, ',
  invalidFileSizeMessageDetail: 'maximum upload size is {0}.',
  style: null,
  className: null,
  widthCredentials: false,
  previewWidth: 50,
  chooseLabel: null,
  uploadLabel: null,
  cancelLabel: null,
  chooseOptions: {
    label: null,
    icon: null,
    iconOnly: false,
    className: null,
    style: null
  },
  uploadOptions: {
    label: null,
    icon: null,
    iconOnly: false,
    className: null,
    style: null
  },
  cancelOptions: {
    label: null,
    icon: null,
    iconOnly: false,
    className: null,
    style: null
  },
  customUpload: false,
  headerClassName: null,
  headerStyle: null,
  contentClassName: null,
  contentStyle: null,
  headerTemplate: null,
  itemTemplate: null,
  emptyTemplate: null,
  onBeforeUpload: null,
  onBeforeSend: null,
  onUpload: null,
  onError: null,
  onClear: null,
  onSelect: null,
  onProgress: null,
  onValidationFail: null,
  uploadHandler: null,
  onRemove: null
});

_defineProperty(FileUpload, "propTypes", {
  id: _propTypes.default.string,
  name: _propTypes.default.string,
  url: _propTypes.default.string,
  mode: _propTypes.default.string,
  multiple: _propTypes.default.bool,
  accept: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  auto: _propTypes.default.bool,
  maxFileSize: _propTypes.default.number,
  invalidFileSizeMessageSummary: _propTypes.default.string,
  invalidFileSizeMessageDetail: _propTypes.default.string,
  style: _propTypes.default.object,
  className: _propTypes.default.string,
  widthCredentials: _propTypes.default.bool,
  previewWidth: _propTypes.default.number,
  chooseLabel: _propTypes.default.string,
  uploadLabel: _propTypes.default.string,
  cancelLabel: _propTypes.default.string,
  chooseOptions: _propTypes.default.object,
  uploadOptions: _propTypes.default.object,
  cancelOptions: _propTypes.default.object,
  customUpload: _propTypes.default.bool,
  headerClassName: _propTypes.default.string,
  headerStyle: _propTypes.default.object,
  contentClassName: _propTypes.default.string,
  contentStyle: _propTypes.default.object,
  headerTemplate: _propTypes.default.any,
  itemTemplate: _propTypes.default.any,
  emptyTemplate: _propTypes.default.any,
  onBeforeUpload: _propTypes.default.func,
  onBeforeSend: _propTypes.default.func,
  onUpload: _propTypes.default.func,
  onError: _propTypes.default.func,
  onClear: _propTypes.default.func,
  onSelect: _propTypes.default.func,
  onProgress: _propTypes.default.func,
  onValidationFail: _propTypes.default.func,
  uploadHandler: _propTypes.default.func,
  onRemove: _propTypes.default.func
});