/*
 * @Author: liguokang && li-gu@outlook.com
 * @Date: 2024-04-02 16:28:05
 * @LastEditors: liguokang && li-gu@outlook.com
 * @LastEditTime: 2024-04-03 00:15:59
 * @FilePath: \gin-blog-front\gulpfile.js
 * @Description:
 * Copyright (c) 2024 by Digital Management Center(DMC), All Rights Reserved.
 */
import gulp from 'gulp'
import sftp from 'gulp-sftp-socksv5'
import GulpSSH from 'gulp-ssh'

const config = {
    host: '112.124.66.58',
    port: '22',
    username: 'root',
    password: 'Asd123123',
}
const gulpSSH = new GulpSSH({
    ignoreErrors: false,
    sshConfig: config,
})

// 备份，删除旧文件
gulp.task('OnDel', () => {
    return gulpSSH
        .exec(['rm -rf /var/website/front_end/www_Backand/blog_front_back/*', 'cp -r /var/website/front_end/blog_front/* /var/website/front_end/www_Backand/blog_front_back'])
})

// 上传新文件
gulp.task('remotePublish', () => {
    gulp.src(['./dist/**'])
        .pipe(sftp({
            host: '112.124.66.58',
            port: '22',
            user: 'root',
            pass: 'Asd123123',
            remotePath: '/var/website/front_end/front-end-doc',
        }))
})
