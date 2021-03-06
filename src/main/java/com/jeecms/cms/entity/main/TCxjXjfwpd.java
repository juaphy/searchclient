package com.jeecms.cms.entity.main;

import java.io.Serializable;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;

import com.jeecms.common.util.StringUtils;

/**
 * 查询机-星级服务评定
 * @author swc 2018-03-15
 *
 */
public class TCxjXjfwpd implements Serializable {
    private static final long serialVersionUID = 2134004669926127895L;

    private String id; // 主键ID
    private String type; // 类型：1-星级服务评定
    private String pepname; // 人名
    private String deptname; // 部门名称
    private String imgurl; // 图片新闻图片标题文件ID
    private Date createtime; // 发布时间
    private String sendid; // 发布人id
    private String sendname; // 发布人名称
    private String senddeptid; // 发布人所属部门id
    private String senddeptname; // 发布人所属部门名称
    private String starnum; // 星级数
    private String minimgurl; // 党建宣传视频略缩图文件id
    private String month; // 评定月份
    private String year; // 评定年份
    private String areaid; // 区划id
    private String status; // 状态：0-无效、1-有效

    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
    public static long getSerialversionuid() {
        return serialVersionUID;
    }
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getType() {
        return type;
    }
    public void setType(String type) {
        this.type = type;
    }
    public String getPepname() {
        return pepname;
    }
    public void setPepname(String pepname) {
        this.pepname = pepname;
    }
    public String getDeptname() {
        return deptname;
    }
    public void setDeptname(String deptname) {
        this.deptname = deptname;
    }
    public String getImgurl() {
        return imgurl;
    }
    public void setImgurl(String imgurl) {
        this.imgurl = imgurl;
    }
    public Date getCreatetime() {
        return createtime;
    }
    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }
    public String getSendid() {
        return sendid;
    }
    public void setSendid(String sendid) {
        this.sendid = sendid;
    }
    public String getSendname() {
        return sendname;
    }
    public void setSendname(String sendname) {
        this.sendname = sendname;
    }
    public String getSenddeptid() {
        return senddeptid;
    }
    public void setSenddeptid(String senddeptid) {
        this.senddeptid = senddeptid;
    }
    public String getSenddeptname() {
        return senddeptname;
    }
    public void setSenddeptname(String senddeptname) {
        this.senddeptname = senddeptname;
    }
    public String getStarnum() {
        return starnum;
    }
    public void setStarnum(String starnum) {
        this.starnum = starnum;
    }
    public String getMinimgurl() {
        return minimgurl;
    }
    public void setMinimgurl(String minimgurl) {
        this.minimgurl = minimgurl;
    }
    public String getMonth() {
        return month;
    }
    public void setMonth(String month) {
        this.month = month;
    }
    public String getYear() {
        return year;
    }
    public void setYear(String year) {
        this.year = year;
    }
    public String getAreaid() {
        return areaid;
    }
    public void setAreaid(String areaid) {
        this.areaid = areaid;
    }

    /**
     * 设置中心简介/窗口布局信息
     * @param info
     * @param request
     * @param paramName
     */
    public static void setXjfwpdInfo(TCxjXjfwpd info, HttpServletRequest request) {

        // 部门名称
        String deptname = request.getParameter("deptname");
        if (!StringUtils.isEmpty(deptname)) {
            info.setDeptname(deptname);
        }

        // 星级数
        String starnum = request.getParameter("starnum");
        if (!StringUtils.isEmpty(starnum)) {
            info.setStarnum(starnum);
        }

        // 评定年份
        String year = request.getParameter("year");
        if (!StringUtils.isEmpty(year)) {
            info.setYear(year);
        }

        // 评定月份
        String month = request.getParameter("month");
        if (!StringUtils.isEmpty(month)) {
            info.setMonth(month);
        }

        // 状态
        String status = request.getParameter("status");
        if (!StringUtils.isEmpty(status)) {
            info.setStatus(status);
        }
    }

}