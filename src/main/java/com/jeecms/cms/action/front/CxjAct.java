package com.jeecms.cms.action.front;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.google.gson.JsonParser;
import com.jeecms.cms.CTools;
import com.jeecms.cms.Constants;
import com.jeecms.cms.entity.main.Content;
import com.jeecms.cms.entity.main.TCxjXjfwpd;
import com.jeecms.cms.entity.main.cxj.TCxjMenu;
import com.jeecms.cms.entity.main.cxj.TCxjZwzxconfig;
import com.jeecms.cms.entity.main.cxj.TCxjZxjjckbj;
import com.jeecms.cms.manager.assist.CmsKeywordMng;
import com.jeecms.cms.manager.main.ContentMng;
import com.jeecms.cms.manager.main.CxjManageMng;
import com.jeecms.cms.manager.main.CxjMng;
import com.jeecms.cms.rest2.CallRestMng;
import com.jeecms.cms.rest2.entity.BusinessInfo;
import com.jeecms.cms.rest2.entity.DeptInfo;
import com.jeecms.cms.rest2.entity.SxInfo;
import com.jeecms.common.util.StringUtils;
import com.jeecms.core.entity.CmsSite;
import com.jeecms.core.web.util.CmsUtils;
import com.jeecms.core.web.util.FrontUtils;

/**
 * 查询机Act
 * @author swc 2018-03-14
 *
 */
@Controller
public class CxjAct {

    /** 查询机相关页面路径*/
    public static final String INDEXPAGE = "searchclient";

    @Autowired
    private ContentMng contentMng;

    @Autowired
    private CmsKeywordMng cmsKeywordMng;

    @Autowired
    private CxjMng cxjMng;

    @Autowired
    private CxjManageMng cxjManageMng;

    @RequestMapping(value="/cxj/index.jspx", method = RequestMethod.GET)
    public String cxjHome(HttpServletRequest request, HttpServletResponse response,
            ModelMap model) throws JSONException {
        CmsSite site = CmsUtils.getSite(request);

        /*// 获取菜单
        String areaId = request.getParameter("areaId");
        if (CTools.isEmpty(areaId)) {
            return FrontUtils.pageNotFound(request, response, model);
        }
        TCxjZwzxconfig zwzxConfig = cxjMng.findZwzxconfig(areaId);
        if (zwzxConfig == null) {
            return FrontUtils.pageNotFound(request, response, model);
        }

        List<TCxjMenu> menus = cxjMng.findCxjMenu(areaId);
        if (menus == null || menus.size() <= 0) {
            return FrontUtils.pageNotFound(request, response, model);
        }
        model.put("menus", menus);
        model.put("zwzxConfig", zwzxConfig);*/
        FrontUtils.frontData(request, model, site);
        return FrontUtils.getTplPath(site.getSolutionPath(), Constants.TPLDIR_CXJINDEX, "home/index");
    }

    /**
     * 中心简介/窗口布局/服务评价
     */
    @RequestMapping(value = "/cxzdj/zxjj.jspx", method = RequestMethod.GET)
    public String cxjIndex(HttpServletRequest request,HttpServletResponse response, ModelMap model) 
            throws JSONException {

        String id = request.getParameter("id");
        if (StringUtils.isEmpty(id)) {
            return FrontUtils.pageNotFound(request, response, model);
        }
        Content content = contentMng.findById(Integer.valueOf(id));
        CmsSite site = CmsUtils.getSite(request);

        int pageNo = 1;
        String txt = content.getTxtByNo(pageNo);

        // 内容加上关键字
        txt = cmsKeywordMng.attachKeyword(site.getId(), txt);

        model.put("content", content);
        model.put("txt", txt);
        model.put("title", content.getTitleByNo(pageNo));

        FrontUtils.frontData(request, model, site);
        FrontUtils.frontPageData(request, model);
        return FrontUtils.getTplPath(site.getSolutionPath(), INDEXPAGE, "zxjj");
    }

    /**
     * 星级服务评定
     */
    @RequestMapping(value = "/cxzdj/xjfwpd.jspx", method = RequestMethod.GET)
    public String xjfwpd(HttpServletRequest request,HttpServletResponse response, ModelMap model) 
            throws JSONException {

        CmsSite site = CmsUtils.getSite(request);
        Map<String, String> params = new HashMap<String, String>();
        List<TCxjXjfwpd> xjfwpdList = cxjMng.findXjfwpdList(params);
        model.put("xjfwpdList", xjfwpdList);
        FrontUtils.frontData(request, model, site);
        FrontUtils.frontPageData(request, model);
        return FrontUtils.getTplPath(site.getSolutionPath(), INDEXPAGE, "xjfwpd");
    }

    /**
     * 办事指南-部门列表
     */
    @RequestMapping(value = "/cxzdj/bszn.jspx", method = RequestMethod.GET)
    public String bszn(HttpServletRequest request,HttpServletResponse response, ModelMap model) 
            throws JSONException {
        CmsSite site = CmsUtils.getSite(request);
        String areaId = request.getParameter("areaId");
        if (!setFrontParam(request, model, site)) {
            return FrontUtils.pageNotFound(request, response, model);
        }

        // 获取部门列表
        List<DeptInfo> jsonDeptList = cxjMng.findDeptListByAreaid(areaId);
        model.put("deptList", jsonDeptList);

        FrontUtils.frontData(request, model, site);
        FrontUtils.frontPageData(request, model);
        return FrontUtils.getTplPath(site.getSolutionPath(), INDEXPAGE, "deptlist");
    }

    /**
     * 办事指南-事项列表
     */
    @RequestMapping(value = "/cxzdj/bsznsxlb.jspx", method = RequestMethod.GET)
    public String bsznSxlb(HttpServletRequest request,HttpServletResponse response, ModelMap model) 
            throws JSONException {
        CmsSite site = CmsUtils.getSite(request);
        String deptId = request.getParameter("deptId");

        // 获取部门列表
        List<SxInfo> jsonSxList = cxjMng.findSxlbByDeptid(deptId);
        model.put("sxList", jsonSxList);

        try {
            String deptName = new String(request.getParameter("deptName").getBytes("iso8859-1"),"UTF-8");
            model.put("deptName", deptName);
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }

        FrontUtils.frontData(request, model, site);
        FrontUtils.frontPageData(request, model);
        return FrontUtils.getTplPath(site.getSolutionPath(), INDEXPAGE, "sxlist");
    }

    /**
     * 查询机内容页-iframe页面
     * @param request
     * @param response
     * @param model
     * @return
     * @throws JSONException
     */
    @RequestMapping(value="/cxj/contentIframe.jspx", method = RequestMethod.GET)
    public String cxjContent(HttpServletRequest request,HttpServletResponse response, ModelMap model) 
            throws JSONException {
        CmsSite site = CmsUtils.getSite(request);
        String areaId = Constants.SYSKEY_AREAID;
        if (CTools.isEmpty(areaId)) {
            return FrontUtils.pageNotFound(request, response, model);
        }

        TCxjZwzxconfig zwzxConfig = cxjMng.findZwzxconfig(areaId);
        if (zwzxConfig == null) {
            return FrontUtils.pageNotFound(request, response, model);
        }

        // 获取菜单信息
        String menuId = request.getParameter("menuId");
        TCxjMenu menu = cxjMng.findCxjMenu(menuId);
        if (menu == null) {
            return FrontUtils.pageNotFound(request, response, model);
        }
        model.put("menu", menu);

        List<TCxjMenu> menus = cxjMng.findCxjMenuList(areaId);
        if (menus == null || menus.size() <= 0) {
            return FrontUtils.pageNotFound(request, response, model);
        }
        model.put("menus", menus);

        FrontUtils.frontData(request, model, site);
        model.put("zwzxConfig", zwzxConfig);
        return FrontUtils.getTplPath(request, site.getSolutionPath(), Constants.TPLDIR_CXJINDEX, "tpl.cxjy");

    }

    /**
     * 查询机-访问进度查询页面
     * @param request
     * @param response
     * @param model
     * @return
     * @throws JSONException
     */
    @RequestMapping(value="/cxj/jdcx.jspx", method = RequestMethod.GET)
    public String jdcx(HttpServletRequest request, HttpServletResponse response, ModelMap model) throws JSONException {
        CmsSite site = CmsUtils.getSite(request);
        if (!setFrontParam(request, model, site)) {
            return FrontUtils.pageNotFound(request, response, model);
        }
        return FrontUtils.getTplPath(request, site.getSolutionPath(), Constants.TPLDIR_CXJINDEX, "tpl.jdcx");
    }

    /**
     * 查询机-进度查询页面显示查询结果
     * @param request
     * @param response
     * @param model
     * @return
     * @throws JSONException
     */
    @RequestMapping(value="/cxj/jdcxresult.jspx", method = RequestMethod.GET)
    public String jdcxresult(HttpServletRequest request, HttpServletResponse response, ModelMap model) throws JSONException {
        CmsSite site = CmsUtils.getSite(request);
        if (!setFrontParam(request, model, site)) {
            return FrontUtils.pageNotFound(request, response, model);
        }
        /*String bsnum = request.getParameter("bsnum");
        BusinessInfo bsinfo = cxjMng.findBusiInfo(bsnum);
        model.put("bsinfo", bsinfo);*/ // 该接口不符合需求
        return FrontUtils.getTplPath(request, site.getSolutionPath(), Constants.TPLDIR_CXJINDEX, "tpl.jdcx");
    }

    /**
     * 查询机-访问服务评价页面
     * @param request
     * @param response
     * @param model
     * @return
     * @throws JSONException
     */
    @RequestMapping(value="/cxj/fwpj.jspx", method = RequestMethod.GET)
    public String fwpj(HttpServletRequest request, HttpServletResponse response, ModelMap model) throws JSONException {
        CmsSite site = CmsUtils.getSite(request);
        String areaId = Constants.SYSKEY_AREAID;
        FrontUtils.frontData(request, model, site);
        return FrontUtils.getTplPath(request, site.getSolutionPath(), Constants.TPLDIR_CXJINDEX, "tpl.fwpj");
    }

    /**
     * 查询机-访问中心简介/窗口布局页面
     * @param request
     * @param response
     * @param model
     * @return
     * @throws JSONException
     */
    @RequestMapping(value="/cxj/zxjjckbj.jspx", method = RequestMethod.GET)
    public String zxjjckbj(HttpServletRequest request, HttpServletResponse response, ModelMap model) throws JSONException {
        CmsSite site = CmsUtils.getSite(request);
        String areaId = Constants.SYSKEY_AREAID;
        if (!setFrontParam(request, model, site)) {
            return FrontUtils.pageNotFound(request, response, model);
        }

        // 获取中心简介或者窗口布局信息
        String type = request.getParameter("type");
        TCxjZxjjckbj info = cxjManageMng.findTCxjZxjjckbjByType(areaId, type);
        model.put("info", info);
        return FrontUtils.getTplPath(request, site.getSolutionPath(), Constants.TPLDIR_CXJINDEX, "tpl.zxjjckbj");
    }

    /**
     * 设置页面返回参数
     * @param request
     * @param model
     * @param site
     * @return 向页面返回zwzxConfig
     */
    private boolean setFrontParam(HttpServletRequest request, ModelMap model, CmsSite site) {
        TCxjZwzxconfig zwzxConfig = cxjMng.findZwzxconfig(Constants.SYSKEY_AREAID);
        if (zwzxConfig == null) {
            return false;
           // return FrontUtils.pageNotFound(request, response, model);
        }
        model.put("zwzxConfig", zwzxConfig);
        FrontUtils.frontData(request, model, site);
        return true;
    }

}
