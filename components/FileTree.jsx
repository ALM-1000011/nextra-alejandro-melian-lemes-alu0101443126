// components/FileTree.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/FileTree.module.css';

const Folder = ({ name, children, defaultOpen }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.folder}>
      <div className={styles.folderName} onClick={toggleOpen}>
        {isOpen ? '📂' : '📁'} {name}
      </div>
      {isOpen && <div className={styles.folderContent}>{children}</div>}
    </div>
  );
};

Folder.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
  defaultOpen: PropTypes.bool,
};

const File = ({ name }) => {
  return <div className={styles.file}>📄 {name}</div>;
};

File.propTypes = {
  name: PropTypes.string.isRequired,
};

const FileTree = ({ children }) => {
  return <div className={styles.fileTree}>{children}</div>;
};

FileTree.Folder = Folder;
FileTree.File = File;

FileTree.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FileTree;